import type { ShortcutOptions } from '../helpers/base';
import { KeyboardKeys } from '../helpers/keyboard.enum';

function withKeyPress(
	key: KeyboardKeys,
	options: ShortcutOptions = {},
): MethodDecorator {
	return function (
		target: any,
		_propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value;

		descriptor.value = function (event: KeyboardEvent) {
			if (
				event.code === key &&
				(!options.control || event.ctrlKey) &&
				(!options.meta || event.metaKey) &&
				(!options.shift || event.shiftKey)
			) {
				originalMethod.call(target, event);
			}
		};

		window.addEventListener('keypress', descriptor.value);

		return descriptor;
	};
}

export default withKeyPress;
