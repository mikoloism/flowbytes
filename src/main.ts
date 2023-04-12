import Board from 'board';
import runApp from 'vendors/app';

import CacheStorage from 'storage/cache';
import task from 'vendors/task';

import withClick from 'event::click';
import Keyboard from 'event::enums';
import withKeyPress from 'event::keypress';

import type { Shape } from 'shape::base';
import Circle from 'shape::circle';
import Rectangle from 'shape::rectangle';
import Square from 'shape::square';
import Triangle from 'shape::triangle';
import Position from 'vendors/position';

let self: App;

class App {
	private cache: CacheStorage<Shape, 'shape'>;
	private board: Board;

	public constructor() {
		self = this;
		this.cache = CacheStorage.new<Shape, 'shape'>('shape', null as any);
		this.board = new Board();
	}

	@withClick(document)
	public on_click({ x, y }: MouseEvent) {
		if (self.cache.isEmpty()) return;
		task().then(() => {
			const shape = self.cache.get()!;
			shape.setPosition(new Position(x, y));
			self.board.insert(shape);
		});
	}

	@withKeyPress([Keyboard.KeyS, Keyboard.Digit1])
	set_square_as_shape(): void {
		const square = new Square();
		self.cache.set(square);
	}

	@withKeyPress([Keyboard.KeyR, Keyboard.Digit2])
	set_rectangle_as_shape(): void {
		const rectangle = new Rectangle();
		self.cache.set(rectangle);
	}

	@withKeyPress([Keyboard.KeyC, Keyboard.Digit3])
	set_circle_as_shape(): void {
		const circle = new Circle();
		self.cache.set(circle);
	}

	@withKeyPress([Keyboard.KeyT, Keyboard.Digit4])
	set_triangle_as_shape(): void {
		const triangle = new Triangle();
		self.cache.set(triangle);
	}
}

runApp(App);
