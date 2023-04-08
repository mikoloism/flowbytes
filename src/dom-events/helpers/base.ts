function withEvent<T extends EventTarget>(
	event: EventType<T>,
	defaultTarget: T,
): WithEvent<T> {
	return function callback(
		listener: Listener<T>,
		target: T = defaultTarget as T,
	): void {
		target.addEventListener(event, listener as EventListener);
	};
}

export default withEvent;

export type ShortcutOptions = {
	control?: boolean;
	meta?: boolean;
	shift?: boolean;
	target?: EventTarget;
};

type EventType<T extends EventTarget> = T extends Element
	? keyof ElementEventMap
	: T extends Document
	? keyof DocumentEventMap
	: T extends Window
	? keyof WindowEventMap
	: string;

type WithEvent<T> = (listener: Listener<T>, target?: T) => void;

type Listener<T> = (
	ev: T extends Element
		? ElementEventMap[EventType<T>]
		: T extends Document
		? DocumentEventMap[EventType<T>]
		: T extends Window
		? WindowEventMap[EventType<T>]
		: Event,
) => void;
