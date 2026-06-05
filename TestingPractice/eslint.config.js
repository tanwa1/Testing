const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
		rules: {
			'no-mixed-spaces-and-tabs': 'off',
			indent: 'off',
		},
	},
];