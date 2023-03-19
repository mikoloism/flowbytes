import BaseShape, { ShapeKind } from './base';
import Position from './position';

export default class Triangle extends BaseShape {
	public type: ShapeKind = ShapeKind.TRIANGLE;

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		$.beginPath();
		$.fillRect(this.position.x, this.position.y, 100, 100);
	}
}
