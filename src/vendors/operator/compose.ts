import type { Operator, BaseOperator } from './base';

interface ComposeOperator<I, O> extends BaseOperator<I, O> {
	from<T>(prevOperator: Operator<T, I>): ComposeOperator<T, O>;
}

class Compose<I, O> implements ComposeOperator<I, O> {
	private operator: Operator<I, O>;

	public constructor(operator: Operator<I, O>) {
		this.operator = operator;
	}

	public from<T>(prevOperator: Operator<T, I>): ComposeOperator<T, O> {
		return new Compose((input: T) => this.compute(prevOperator(input)));
	}

	public build(): Operator<I, O> {
		return this.operator;
	}

	public compute(input: I): O {
		return this.operator(input);
	}
}

function compose<I, O>(nextCompose: Operator<I, O>): Compose<I, O> {
	return new Compose<I, O>(nextCompose);
}

export { Compose };
export default compose;
