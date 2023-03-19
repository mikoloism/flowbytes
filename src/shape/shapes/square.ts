import BaseShape, { ShapeKind } from '../helpers/base';
import Color from '../helpers/color';
import Position from '../helpers/position';

export default class Square extends BaseShape {
	public type: ShapeKind = ShapeKind.SQUARE;

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		const startPoint = this.position.startPoint;
		const color = Color.createSchema(this.color);

		let shape = new Path2D();
		shape.rect(startPoint.x, startPoint.y, 100, 100);
		$.fillStyle = color.fill;
		$.fill(shape);
		$.lineWidth = 10;
		$.strokeStyle = color.stroke;
		$.stroke(shape);
	}
}
