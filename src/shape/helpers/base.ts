import type { Svg } from '@svgdotjs/svg.js';
import * as uuid from 'uuid';
import type Position from 'vendors/position';
import type { ShapeId } from '../types';
import Color from './color';
import { ShapeKind } from './kind';
import withAutoBind from 'auto-bind';

abstract class BaseShape {
	public readonly id: ShapeId;
	public abstract readonly type: ShapeKind;
	public abstract position: Position;
	public color: Color = Color.BLACK;

	public constructor() {
		this.id = this.generateId();
		withAutoBind(this);
	}

	protected generateId(): ShapeId {
		return uuid.v4();
	}

	protected bound() {}

	public setPosition(position: Position) {
		this.position = position;
	}

	public abstract draw($: Svg): void | this;

	protected abstract on_mouseleave(): void;
	protected abstract on_mouseenter(): void;
	protected abstract on_mousemove(): void;
	protected abstract on_mousedown(): void;
	protected abstract on_mouseup(): void;
	protected abstract on_click(): void;
	// protected abstract on_delete(): void;
	// protected abstract on_mount(): void;
	// protected abstract on_render(): void;
}

export default BaseShape;
