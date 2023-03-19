import BaseShape, { ShapeKind } from '../helpers/base';
import Color from '../helpers/color';
import Position from '../helpers/position';

export default class Circle extends BaseShape {
	public type: ShapeKind = ShapeKind.CIRCLE;

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		const startPoint = this.position.startPoint;
		const color = Color.createSchema(this.color);
		const radius = 50;

		let shape = new Path2D();
		shape.arc(startPoint.x, startPoint.y, radius, 0, 2 * Math.PI, false);
		$.fillStyle = color.fill;
		$.fill(shape);
		$.lineWidth = 10;
		$.strokeStyle = color.stroke;
		$.stroke(shape);
	}
}
