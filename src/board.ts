import Canvas from './canvas';
import type { Shape } from './shape';

class Board {
	private readonly shapes: BoardStorage;
	public constructor(public canvas: Canvas) {
		this.shapes = new Map<string, Shape>();
	}

	public insert(shape: Shape): this {
		Promise.resolve(true)
			.then(() => this.shapes.set(shape.id, shape))
			.then(() => this.render());
		return this;
	}

	public render(): this {
		this.canvas.redraw(this.shapes);
		return this;
	}


	public remove(shapeId: string): boolean {
		if (!this.shapes.has(shapeId)) return false;

		let isDeleted = false;
		Promise.resolve(true)
			.then(() => (isDeleted = this.shapes.delete(shapeId)))
			.then(() => this.render());
		return isDeleted;
	}
}

export type BoardStorage = Map<string, Shape>;

export default Board;
