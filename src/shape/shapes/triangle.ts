import type { Svg } from '@svgdotjs/svg.js';
import Position from 'vendors/position';

import ShapeError, { ShapeException } from '../helpers/exception';

import BaseShape from '../helpers/base';
import { ShapeKind } from '../helpers/kind';

export default class Triangle extends BaseShape {
	public type: ShapeKind = ShapeKind.TRIANGLE;
	public size: number = 100;
	public position!: Position;

	public constructor() {
		super();

		throw new ShapeException(ShapeError.SHAPE_NOT_IMPLEMENTED);
	}

	public draw(_$: Svg): void {
		// this.position.calcPoint('center', this.size);
		// const point = this.position.startPoint;
		// const ePoint = this.position.endPoint;
		// const color = Color.createSchema(this.color);
		// let shape = new Path2D();
		// shape.moveTo(point.x + this.size / 2, point.y);
		// shape.lineTo(ePoint.x, ePoint.y);
		// shape.lineTo(ePoint.x - this.size, ePoint.y);
		// shape.closePath();
	}
}
