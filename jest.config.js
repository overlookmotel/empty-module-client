/* --------------------
 * {{name}} module
 * Jest config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	testEnvironment: 'node',
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.js'],
	setupFilesAfterEnv: ['jest-extended'],
	// Resolve `import from '{{name}}'` to src or build, depending on env variable
	moduleNameMapper: {
		'^{{name}}$': resolvePath()
	}
};

function resolvePath() {
	const testEnv = (process.env.TEST_ENV || '').toLowerCase(),
		isProd = process.env.NODE_ENV === 'production';

	if (!testEnv) return '<rootDir>/src/index.js';
	if (testEnv === 'cjs') return '<rootDir>/index.js';
	if (testEnv === 'umd') return `<rootDir>/dist/umd/{{name}}${isProd ? '.min' : ''}.js`;

	throw new Error(`Invalid TEST_ENV '${testEnv}' - valid options are 'cjs', 'umd' or undefined`);
}
