import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			'vendors/pipe': '/src/vendors/operator/pipe.ts',
			'vendors/compose': '/src/vendors/operator/compose.ts',
			'vendors/position': '/src/vendors/position.ts',
			'@': '/src',
		},
	},
});
