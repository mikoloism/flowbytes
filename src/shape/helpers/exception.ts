import withError from 'vendors/exception';

enum ShapeError {
	NOT_IMPLEMENTED = 'the Shape instance not implemented',
	NOT_RESOLVED = 'the Shape instance not resolved at moment',
}

@withError()
class ShapeException extends Error {}

export default ShapeError;
export { ShapeException };
