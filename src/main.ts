import runApp from 'vendors/app';
import Board from 'board';

import CacheStorage from 'storage/cache';
import task from 'vendors/task';

import withKeyPress from 'event::keypress';
import withClick from 'event::click';
import Keyboard from 'event::enums';

import type { Shape } from 'shape::base';
import Square from 'shape::square';
import Circle from 'shape::circle';
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

	@withKeyPress(Keyboard.KeyS)
	set_square_as_shape(): void {
		const square = new Square();
		self.cache.set(square);
	}

	@withKeyPress(Keyboard.KeyR)
	set_circle_as_shape(): void {
		const circle = new Circle();
		self.cache.set(circle);
	}
}

runApp(App);
