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
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^{{name}}$']}],
		'node/no-missing-require': ['error', {allowModules: ['{{name}}']}]
	},
	overrides: [{
		files: ['!.*'],
		extends: [
			'@overlookmotel/eslint-config-jest',
			'@overlookmotel/eslint-config-react'
		],
		rules: {
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}]
		}
	}]
};
