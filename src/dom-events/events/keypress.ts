import type { ShortcutOptions } from '../helpers/base';
import { KeyboardKeys } from '../helpers/keyboard.enum';

function withKeyPress(
	key: KeyboardKeys,
	options?: ShortcutOptions,
): MethodDecorator;
function withKeyPress(
	keys: Array<KeyboardKeys>,
	options?: ShortcutOptions,
): MethodDecorator;
function withKeyPress(
	key: KeyboardKeys | Array<KeyboardKeys>,
	options: ShortcutOptions = {},
): MethodDecorator {
	return function (
		target: any,
		_propertyKey: string | symbol,
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value;

		descriptor.value = function (event: KeyboardEvent) {
			let keys: Array<KeyboardKeys> = key as Array<KeyboardKeys>;

			if (typeof key === 'number' || typeof key === 'string')
				keys = [key] as Array<KeyboardKeys>;

			if (
				keys.includes(event.code as KeyboardKeys) &&
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
