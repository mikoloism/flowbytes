import type { Operator, BaseOperator } from './base';

interface PipeOperator<I, O> extends BaseOperator<I, O> {
	to<T>(nextOperator: Operator<O, T>): PipeOperator<I, T>;
}

class Pipe<I, O> implements PipeOperator<I, O> {
	private operator: Operator<I, O>;

	public constructor(operator: Operator<I, O>) {
		this.operator = operator;
	}

	public to<T>(nextOperator: Operator<O, T>): PipeOperator<I, T> {
		return new Pipe<I, T>((input: I) => nextOperator(this.compute(input)));
	}

	public build(): Operator<I, O> {
		return this.operator;
	}

	public compute(input: I): O {
		return this.operator(input);
	}
}

function pipe<I, O>(operator: Operator<I, O>): Pipe<I, O> {
	return new Pipe<I, O>(operator);
}

export { Pipe };
export default pipe;
