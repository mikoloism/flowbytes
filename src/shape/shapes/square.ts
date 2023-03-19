import BaseShape, { ShapeKind } from '../helpers/base';
import Position from '../helpers/position';

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
