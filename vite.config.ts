import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			/** shape scope */
			'shape::base': '/src/shape/index.ts',
			'shape::circle': '/src/shape/shapes/circle.ts',
			'shape::rectangle': '/src/shape/shapes/rectangle.ts',
			'shape::square': '/src/shape/shapes/square.ts',
			'shape::triangle': '/src/shape/shapes/triangle.ts',

			/** event scope */
			'event::click': '/src/dom-events/events/click.ts',
			'event::keydown': '/src/dom-events/events/keydown.ts',
			'event::keypress': '/src/dom-events/events/keypress.ts',
			'event::enums': '/src/dom-events/helpers/keyboard.enum.ts',

			/** vendors:operator scope */
			'vendors/pipe': '/src/vendors/operator/pipe.ts',
			'vendors/compose': '/src/vendors/operator/compose.ts',
			'vendors/task': '/src/vendors/operator/task.ts',
			'vendors/chain': '/src/vendors/operator/chain.ts',

			/** vendors scope  */
			'vendors/position': '/src/vendors/position/index.ts',
			'vendors/exception': '/src/vendors/exception',
			'vendors/app': '/src/vendors/startup/index.ts',

			/** vendors:storage scope */
			'storage/base': '/src/vendors/storage/base.ts',
			'storage/cache': '/src/vendors/storage/cache.ts',

			/** src scope */
			board: '/src/board',
			shape: '/src/shape',
			driver: '/src/driver',
			'@': '/src',
		},
	},
});
