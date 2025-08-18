import { config } from '@s1m/eslint-config/index.js';

export default [
	...config,
	{
		ignores: ['.svelte-kit/*', '.vercel/*']
	}
];
