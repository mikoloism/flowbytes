type Operator<I, O> = (input: I) => O;

interface BaseOperator<I, O> {
	build(): Operator<I, O>;
	compute(input: I): ReturnType<Operator<I, O>>;
}

export type { Operator, BaseOperator };
