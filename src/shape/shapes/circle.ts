import BaseShape, { ShapeKind } from '../helpers/base';
import Color from '../helpers/color';
import Position, { type PointOfGravity } from '../helpers/position';

export default class Circle extends BaseShape {
	public type: ShapeKind = ShapeKind.CIRCLE;
	public size: number = 50;
	public pointOfGravity: PointOfGravity = 'center';

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		this.position.calcPoint(this.pointOfGravity, this.size);
		const startPoint = this.position.startPoint;
		const color = Color.createSchema(this.color);
		const startArc = 0;
		const endArc = /* 360deg */ 2 * Math.PI;
		const isClockwise = false;

		let shape = new Path2D();
		shape.arc(
			startPoint.x,
			startPoint.y,
			this.size,
			startArc,
			endArc,
			isClockwise,
		);
		$.fillStyle = color.fill;
		$.fill(shape);
		$.lineWidth = 10;
		$.strokeStyle = color.stroke;
		$.stroke(shape);
	}
}
