import BaseShape, { ShapeKind } from './base';
import Position from './position';

export default class Square extends BaseShape {
	public type: ShapeKind = ShapeKind.SQUARE;

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		$.beginPath();
		$.fillRect(this.position.x, this.position.y, 100, 100);
	}
}
