enum ShapeError {
	SHAPE_NOT_IMPLEMENTED = 'the Shape instance not implemented',
	SHAPE_NOT_RESOLVED = 'the Shape instance not resolved at moment',
}

class ShapeException extends Error {
	public constructor(message: ShapeError) {
		super(message);
		super.name = 'ShapeException';
	}
}

export default ShapeError;
export { ShapeException };
