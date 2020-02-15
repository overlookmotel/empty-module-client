/* --------------------
 * {{name}} module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-node'
	],
	overrides: [{
		files: ['!.eslintrc.js'],
		extends: [
			'@overlookmotel/eslint-config-jest',
			'@overlookmotel/eslint-config-react'
		],
		rules: {
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}]
		}
	}]
};