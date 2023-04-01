import * as uuid from 'uuid';
import Color from './color';
import type Position from '../../vendors/position';
import type { ShapeId } from '../types';
import { ShapeKind } from './kind';

abstract class BaseShape {
	public readonly id: ShapeId;
	public abstract readonly type: ShapeKind;
	public abstract position: Position;
	public color: Color = Color.BLACK;

	public constructor() {
		this.id = uuid.v4();
	}

	public abstract draw($: CanvasRenderingContext2D): void | this;
}

export default BaseShape;
