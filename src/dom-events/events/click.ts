function withClick(element: EventTarget | null = document): MethodDecorator {
	return function (
		target: any,
		_propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value;

		descriptor.value = function (event: MouseEvent) {
			originalMethod.call(target, event);
		};

		element?.addEventListener('click', descriptor.value);

		return descriptor;
	};
}

export default withClick;
