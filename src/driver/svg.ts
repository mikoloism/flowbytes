import { SVG } from '@svgdotjs/svg.js';

class SvgDriver {
	private constructor() {}

	public static new() {
		return SVG()
			.addTo(document.querySelector<HTMLDivElement>('#root')!)
			.addClass('app')
			.size(window.innerWidth, window.innerHeight);
	}
}

export default SvgDriver;
