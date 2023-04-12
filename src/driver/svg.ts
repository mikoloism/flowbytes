import { SVG } from '@svgdotjs/svg.js';

class SvgDriver {
	public width: number;
	public height: number;
	private constructor() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}

	public static new() {
		return SVG()
			.addTo(document.querySelector<HTMLDivElement>('#root')!)
			.addClass('app')
			.size(window.innerWidth, window.innerHeight);
	}
}

export default SvgDriver;
