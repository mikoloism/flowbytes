import type { Rect, Svg } from '@svgdotjs/svg.js';
import Position from 'vendors/position';

import BaseShape from '../helpers/base';
import Color from '../helpers/color';
import { ShapeKind } from '../helpers/kind';

export default class Square extends BaseShape {
	public type: ShapeKind = ShapeKind.SQUARE;
	public size: number = 100;
	public position!: Position;
	public self!: Rect;

	public constructor() {
		super();
	}

	public on_mousedown() {
		const color = Color.createSchema(this.color);
		this.self.fill(color.stroke);
		this.self.stroke(color.fill);
	}

	public on_mouseup() {
		const color = Color.createSchema(this.color);
		this.self.fill(color.fill);
		this.self.stroke(color.stroke);
	}

	public draw($: Svg): void {
		this.position.calcPoint('center', this.size, this.size);
		const color = Color.createSchema(this.color);
		const point = this.position.startPoint;

		this.self = $.rect(this.size, this.size);
		this.self.move(point.x, point.y).attr({
			fill: color.fill,
			stroke: color.stroke,
			strokeWidth: 5,
			'data-id': this.id,
		});

		this.self.on('mousedown', this.on_mousedown.bind(this));
		this.self.on('mouseup', this.on_mouseup.bind(this));
	}
}
