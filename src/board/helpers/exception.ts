import withError from 'vendors/exception';

enum BoardError {
	NOT_IMPLEMENTED = 'the Board instance not implemented',
}

@withError()
class BoardException extends Error {}

@withError()
class RepositoryException extends Error {}

export default BoardError;
export { BoardException, RepositoryException };
