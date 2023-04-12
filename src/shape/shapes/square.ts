import type { Svg, Rect as SvgRect } from '@svgdotjs/svg.js';
import Position from 'vendors/position';

import BaseShape from '../helpers/base';
import Color from '../helpers/color';
import { ShapeKind } from '../helpers/kind';

export default class Square extends BaseShape {
	public type: ShapeKind = ShapeKind.SQUARE;
	public size: number = 100;
	public position!: Position;
	private self!: SvgRect;

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
	}

	protected on_click(): void {}
	protected on_mousedown(): void {}
	protected on_mouseenter(): void {}
	protected on_mouseleave(): void {}
	protected on_mousemove(): void {}
	protected on_mouseup(): void {}
}
