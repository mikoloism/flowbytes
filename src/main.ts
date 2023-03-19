import Board from './board';
import Canvas from './canvas';
import { Circle, Color, Position, Rectangle, Square, Triangle } from './shape';

function initialize() {
	let isSelected = false;
	let Shape: any = Square;
	let PoG: any;
	let color: Color = Color.BLACK;
	const canvas = Canvas.createCanvas('#app');
	const board = new Board(canvas);

	window.addEventListener('keypress', (event: KeyboardEvent) => {
		if (event.key === 'c') Shape = Circle;
		else if (event.key === 'r') Shape = Rectangle;
		else if (event.key === 's') Shape = Square;
		else if (event.key === 't') Shape = Triangle;
		else if (event.key === '1') PoG = 'top-right';
		else if (event.key === '2') PoG = 'top-left';
		else if (event.key === '3') PoG = 'center';
		else if (event.key === '4') PoG = 'bottom-right';
		else if (event.key === '5') PoG = 'bottom-left';
		else if (event.key === 'd') color = Color.RED;
		else if (event.key === 'b') color = Color.BLUE;
		else if (event.key === 'k') color = Color.BLACK;
		else if (event.key === 'g') color = Color.GREEN;
		else if (event.key === 'y') color = Color.YELLOW;
	});

	document.addEventListener('mousemove', (event: MouseEvent) => {
		const { x, y } = event;

		if (isSelected === false) return;

		let inRange = board.inRange(new Position(x, y));

		if (inRange === null) return;

		inRange.position = new Position(x, y);
		board.render();
	});

	document.addEventListener('mouseup', (event: MouseEvent) => {
		if (isSelected === false) return;

		let inRange = board.inRange(new Position(event.x, event.y));

		if (inRange === null) return;
		isSelected = false;
		inRange.color = Color.BLACK;
		board.render();
	});

	document.addEventListener('mousedown', (event: MouseEvent) => {
		if (isSelected === true) return;

		let inRange = board.inRange(new Position(event.x, event.y));

		if (inRange === null) return;
		isSelected = true;
		inRange.color = Color.GREEN;
		board.render();
	});

	document.addEventListener('click', (event: MouseEvent) => {
		const { x, y } = event;
		let inRange = board.inRange(new Position(x, y));

		if (inRange === null) {
			const shape = new Shape(new Position(x, y));
			shape.color = color;
			shape.pointOfGravity = PoG;
			board.insert(shape);
		} else {
			// board.render();
		}
	});
}

function app() {
	initialize();
}

document.addEventListener('readystatechange', app);
