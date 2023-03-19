import Canvas from './canvas';
import type { Shape } from './shape';

class Board {
	private readonly shapes: BoardStorage;
	public constructor(public canvas: Canvas) {
		this.shapes = new Map<string, Shape>();
	}

	public insert(shape: Shape): this {
		Promise.resolve(true)
			.then(() => {
				this.shapes.set(shape.id, shape);
			})
			.then(() => {
				this.canvas.redraw(this.shapes);
			});
		return this;
	}
}

export type BoardStorage = Map<string, Shape>;

export default Board;
