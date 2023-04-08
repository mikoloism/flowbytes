import SvgDriver from 'driver/svg';
import type { Shape } from 'shape';
import task from 'vendors/task';
import Repository, { type RepositoryInterface } from './repository';
import type { Driver } from 'driver';

class Board implements BaseBoard {
	private readonly repository: Repository;
	private readonly driver: Driver;

	public constructor() {
		this.repository = new Repository();
		this.driver = SvgDriver.new() as any;
	}

	public insert(shape: Shape): boolean {
		let isInserted = this.repository.insert(shape);

		if (isInserted) {
			this.redraw();
		}

		return isInserted;
	}

	public delete(shapeId: string): Shape | null {
		return this.repository.delete(shapeId);
	}

	public find(shapeId: string): Shape | null {
		return this.repository.find(shapeId);
	}

	public redraw() {
		task()
			// .then(this.repository.clear)
			.then(() => this.repository.toArray())
			.then((shapes) => shapes.map(([_, shape]) => shape))
			.then((shapes) => shapes.map((shape) => shape.draw(this.driver)));
	}
}

interface BaseBoard extends RepositoryInterface {}

export default Board;
