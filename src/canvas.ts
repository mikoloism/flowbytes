import type { BoardStorage } from './board';
import type { Shape } from './shape';

class Canvas {
	private static instance: Canvas | null = null;
	private readonly selector: string;
	public readonly element: HTMLCanvasElement;
	public readonly $: CanvasRenderingContext2D;

	private constructor(selector: string) {
		this.selector = selector;
		this.element = document.querySelector<HTMLCanvasElement>(
			this.selector,
		)!;
		this.$ = this.element.getContext('2d')!;

		this.resize();
	}

	public static createCanvas(selector?: string): Canvas {
		if (Canvas.instance === null) {
			Canvas.instance = new Canvas(selector ?? 'app');
		}

		return Canvas.instance;
	}

	public draw(shape: Shape) {
		shape.draw(this.$);
	}

	public redraw(shapes: BoardStorage) {
		Promise.resolve(true)
			.then(() => {
				this.$.clearRect(0, 0, this.element.width, this.element.height);
			})
			.then(() => {
				shapes.forEach((shape: Shape) => {
					this.draw(shape);
				});
			});
	}

	public resize(): void {
		this.element.width = window.innerWidth;
		this.element.height = window.innerHeight;
		this.element.style.width = `${window.innerWidth}px`;
		this.element.style.height = `${window.innerHeight}px`;
	}

	public eventListeners() {
		document.addEventListener('resize', this.resize);
	}
}

export default Canvas;
