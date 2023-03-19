import BaseShape, { ShapeKind } from '../helpers/base';
import Position from '../helpers/position';

export default class Rectangle extends BaseShape {
	public type: ShapeKind = ShapeKind.RECTANGLE;

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		$.beginPath();
		$.fillRect(this.position.x, this.position.y, 100, 100);
	}
}
