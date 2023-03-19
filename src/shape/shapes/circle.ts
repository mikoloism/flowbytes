import BaseShape, { ShapeKind } from '../helpers/base';
import Position from '../helpers/position';

export default class Circle extends BaseShape {
	public type: ShapeKind = ShapeKind.CIRCLE;

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		$.beginPath();
		$.roundRect(this.position.x, this.position.y, 100, 100, 100);
	}
}
