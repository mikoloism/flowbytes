import Canvas from './canvas';
import type { Position, Shape } from './shape';

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

	public inRange(clickPoint: Position): Shape | null {
		const shapes = Array.from(this.shapes);
		let inRangeShape = shapes.filter(([_, shape]: [string, Shape]) => {
			const shapeStartPoint = shape.position.startPoint;
			const shapeEndPoint = shape.position.endPoint;
			const inVerticalRange =
				shapeStartPoint.x < clickPoint.x &&
				shapeEndPoint.x > clickPoint.x;
			const inHorizontalRange =
				shapeStartPoint.y < clickPoint.y &&
				shapeEndPoint.y > clickPoint.y;
			return inVerticalRange && inHorizontalRange;
		});

		if (inRangeShape.length === 0) return null;
		return inRangeShape[0][1];
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
