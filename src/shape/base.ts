import * as uuid from 'uuid';
import Position from './position';

abstract class BaseShape {
	public readonly id: string;
	public abstract readonly type: ShapeKind;
	public abstract position: Position;

	public constructor() {
		this.id = uuid.v4();
	}

	public abstract draw($: CanvasRenderingContext2D): void | this;
}

export enum ShapeKind {
	RECTANGLE = 'rectangle',
	SQUARE = 'square',
	TRIANGLE = 'triangle',
	CIRCLE = 'circle',
}

export default BaseShape;
