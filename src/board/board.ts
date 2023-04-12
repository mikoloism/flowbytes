import SvgDriver from 'driver/svg';
import type { Shape } from 'shape';
import task from 'vendors/task';
import Repository, { type RepositoryInterface } from './repository';
import type { Driver } from 'driver';
import GridGenerator, { GridStyle } from 'vendors/package';
import withAutoBind from 'auto-bind';

class Board implements BaseBoard {
	private readonly repository: Repository;
	private readonly driver: Driver;
	private grid!: GridGenerator;

	public constructor() {
		this.repository = new Repository();
		this.driver = SvgDriver.new() as any;
		withAutoBind(this);
	}

	public generateGrid(style?: GridStyle, fills?: Array<string>) {
		this.grid = new GridGenerator(this.driver);
		let rows = window.innerHeight / 32;
		let columns = window.innerWidth / 32;
		this.grid.generate({
			size: 1,
			columns,
			rows,
			fills,
			style,
		});
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
