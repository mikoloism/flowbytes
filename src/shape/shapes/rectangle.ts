import type { Svg } from '@svgdotjs/svg.js';
import Position from 'vendors/position';

import BaseShape from '../helpers/base';
import Color from '../helpers/color';
import { ShapeKind } from '../helpers/kind';

export default class Rectangle extends BaseShape {
	public type: ShapeKind = ShapeKind.RECTANGLE;
	public width: number = 100;
	public height: number = 100;
	public position!: Position;

	public constructor() {
		super();
	}

	public draw($: Svg): void {
		this.position.calcPoint('center', this.width, this.height);
		const point = this.position.startPoint;
		const color = Color.createSchema(this.color);

		$.rect(this.width, this.height)
			.move(point.x, point.y)
			.attr({ fill: color.fill, stroke: color.stroke, strokeWidth: 5 });
	}
}
