import BaseShape, { ShapeKind } from '../helpers/base';
import Color from '../helpers/color';
import Position, { type PointOfGravity } from '../helpers/position';

export default class Rectangle extends BaseShape {
	public type: ShapeKind = ShapeKind.RECTANGLE;
	public width: number = 100;
	public height: number = 100;
	public pointOfGravity: PointOfGravity = 'center';

	public constructor(public position: Position) {
		super();
	}

	public draw($: CanvasRenderingContext2D): void {
		this.position.calcPoint(this.pointOfGravity, this.width, this.height);
		const startPoint = this.position.startPoint;
		const color = Color.createSchema(this.color);

		let shape = new Path2D();
		shape.rect(startPoint.x, startPoint.y, this.width, this.height);
		$.fillStyle = color.fill;
		$.fill(shape);
		$.lineWidth = 10;
		$.strokeStyle = color.stroke;
		$.stroke(shape);
	}
}
