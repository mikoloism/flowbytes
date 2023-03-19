type Vertical = 'top' | 'bottom';
type Horizontal = 'left' | 'right';
type PointOfGravity = `${Vertical}-${Horizontal}` | 'center';

// TODO : shape-size
const SHAPE_SIZE = 100;

export default class Position {
	public startPoint!: Point;
	public endPoint!: Point;

	public constructor(public x: number, public y: number) {
		this.calculate('top-left');
	}

	public calculate(pog: PointOfGravity): void {
		switch (pog) {
			case 'center':
				this.startPoint = new Point(
					this.x - SHAPE_SIZE / 2,
					this.y - SHAPE_SIZE / 2,
				);
				this.endPoint = new Point(
					this.x + SHAPE_SIZE / 2,
					this.y + SHAPE_SIZE / 2,
				);
				break;

			case 'bottom-left':
				this.startPoint = new Point(this.x, this.y - SHAPE_SIZE);
				this.endPoint = new Point(this.x + SHAPE_SIZE, this.y);
				break;

			case 'bottom-right':
				this.startPoint = new Point(
					this.x - SHAPE_SIZE,
					this.y - SHAPE_SIZE,
				);
				this.endPoint = new Point(this.x, this.y);
				break;

			case 'top-right':
				this.startPoint = new Point(this.x - SHAPE_SIZE, this.y);
				this.endPoint = new Point(this.x, this.y + SHAPE_SIZE);
				break;

			case 'top-left':
			default:
				this.startPoint = new Point(this.x, this.y);
				this.endPoint = new Point(
					this.x + SHAPE_SIZE,
					this.y + SHAPE_SIZE,
				);
				break;
		}
	}
}

class Point {
	public constructor(public x: number, public y: number) {}
}
