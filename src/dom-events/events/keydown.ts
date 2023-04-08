import type { ShortcutOptions } from '../helpers/base';
import { KeyboardKeys } from '../helpers/keyboard.enum';

function withKeyDown(
	key: KeyboardKeys,
	options: ShortcutOptions = {},
): MethodDecorator {
	return function (
		_target: any,
		_propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value;

		descriptor.value = function (event: KeyboardEvent) {
			if (
				event.key === key &&
				(!options.control || event.ctrlKey) &&
				(!options.meta || event.metaKey) &&
				(!options.shift || event.shiftKey) &&
				(!options.target || event.target === options.target)
			) {
				originalMethod.call(this, event);
			}
		};

		window.addEventListener('keydown', descriptor.value);

		return descriptor;
	};
}

export default withKeyDown;
