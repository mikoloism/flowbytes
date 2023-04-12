import type { Svg, Polygon as SvgPolygon } from '@svgdotjs/svg.js';
import Position from 'vendors/position';

import BaseShape from '../helpers/base';
import Color from '../helpers/color';
import { ShapeKind } from '../helpers/kind';

export default class Triangle extends BaseShape {
	public type: ShapeKind = ShapeKind.TRIANGLE;
	public size: number = 100;
	public position!: Position;
	private self!: SvgPolygon;

	public draw($: Svg): void {
		this.position.calcPoint('center', this.size);
		const point = this.position.startPoint;
		const ePoint = this.position.endPoint;
		const color = Color.createSchema(this.color);

		this.self = $.polygon([
			[point.x + this.size / 2, point.y],
			[ePoint.x, ePoint.y],
			[ePoint.x - this.size, ePoint.y],
		]);

		this.self.attr({
			fill: color.fill,
			stroke: color.stroke,
			strokeWidth: 5,
			'data-id': this.id,
		});
	}

	protected on_click(): void {}
	protected on_mousedown(): void {}
	protected on_mouseenter(): void {}
	protected on_mouseleave(): void {}
	protected on_mousemove(): void {}
	protected on_mouseup(): void {}
}
