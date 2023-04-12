import type { Svg, Circle as SvgCircle } from '@svgdotjs/svg.js';
import Position from 'vendors/position';

import BaseShape from '../helpers/base';
import Color from '../helpers/color';
import { ShapeKind } from '../helpers/kind';

export default class Circle extends BaseShape {
	public type: ShapeKind = ShapeKind.CIRCLE;
	public size: number = 50;
	public position!: Position;
	private self!: SvgCircle;

	public draw($: Svg): void {
		this.position.calcPoint('center', this.size);
		const point = this.position.startPoint;
		const color = Color.createSchema(this.color);

		this.self = $.circle(this.size);
		this.self.move(point.x, point.y).attr({
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
