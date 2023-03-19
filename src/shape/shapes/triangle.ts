import BaseShape, { ShapeKind } from '../helpers/base';
import Color from '../helpers/color';
import Position, { type PointOfGravity } from '../helpers/position';

export default class Triangle extends BaseShape {
	public type: ShapeKind = ShapeKind.TRIANGLE;
	public size: number = 100;
	public pointOfGravity: PointOfGravity = 'center';

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		this.position.calcPoint('center', this.size);
		const point = this.position.startPoint;
		const ePoint = this.position.endPoint;
		const color = Color.createSchema(this.color);

		let shape = new Path2D();
		shape.moveTo(point.x + this.size / 2, point.y);
		shape.lineTo(ePoint.x, ePoint.y);
		shape.lineTo(ePoint.x - this.size, ePoint.y);
		shape.closePath();
		$.fillStyle = color.fill;
		$.fill(shape);
		$.lineWidth = 10;
		$.strokeStyle = color.stroke;
		$.stroke(shape);
	}
}
