import { defineConfig } from 'cypress';

export default defineConfig({
	pageLoadTimeout: 10000,
	defaultCommandTimeout: 6000,
	e2e: {
		baseUrl: 'http://localhost:3000',

		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
