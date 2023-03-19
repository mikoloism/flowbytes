enum Color {
	RED = '#DE3163',
	BLUE = '#6495ED',
	GREEN = '#9FE2BF',
	BLACK = '#283747',
	YELLOW = '#FFBF00',
}

namespace Color {
	export function createSchema(color: Color) {
		return {
			fill: Color.shade(color, 50),
			stroke: Color.shade(color, -50),
			text: Color.shade(color, 5),
		};
	}

	export function shade(color: string, percent: number) {
		let decRed = parseInt(color.substring(1, 3), 16);
		let decGreen = parseInt(color.substring(3, 5), 16);
		let decBlue = parseInt(color.substring(5, 7), 16);

		decRed = parseInt(((decRed * (100 + percent)) / 100).toString());
		decGreen = parseInt(((decGreen * (100 + percent)) / 100).toString());
		decBlue = parseInt(((decBlue * (100 + percent)) / 100).toString());

		decRed = decRed < 255 ? decRed : 255;
		decGreen = decGreen < 255 ? decGreen : 255;
		decBlue = decBlue < 255 ? decBlue : 255;

		decRed = Math.round(decRed);
		decGreen = Math.round(decGreen);
		decBlue = Math.round(decBlue);

		const hexRed =
			decRed.toString(16).length == 1
				? '0' + decRed.toString(16)
				: decRed.toString(16);
		const hexGreen =
			decGreen.toString(16).length == 1
				? '0' + decGreen.toString(16)
				: decGreen.toString(16);
		const hexBlue =
			decBlue.toString(16).length == 1
				? '0' + decBlue.toString(16)
				: decBlue.toString(16);

		return `#${hexRed}${hexGreen}${hexBlue}`;
	}
}

export default Color;
