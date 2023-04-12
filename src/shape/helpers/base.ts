import type { Svg } from '@svgdotjs/svg.js';
import * as uuid from 'uuid';
import type Position from 'vendors/position';
import type { ShapeId } from '../types';
import Color from './color';
import { ShapeKind } from './kind';

abstract class BaseShape {
	public readonly id: ShapeId;
	public abstract readonly type: ShapeKind;
	public abstract position: Position;
	public color: Color = Color.BLACK;

	public constructor() {
		this.id = this.generateId();
	}

	protected generateId(): ShapeId {
		return uuid.v4();
	}

	public setPosition(position: Position) {
		this.position = position;
	}

	public abstract draw($: Svg): void | this;
}

export default BaseShape;
