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
	const testEnv = process.env.TEST_ENV;
	if (testEnv === 'cjs') return '<rootDir>/index.js';
	if (testEnv === 'umd') return '<rootDir>/dist/umd/{{name}}.js';
	return '<rootDir>/src/index.js';
}
