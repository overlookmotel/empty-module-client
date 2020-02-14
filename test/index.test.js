/* --------------------
 * {{name}} module
 * Tests
 * ------------------*/

// Modules
// eslint-disable-next-line import/no-unresolved, node/no-missing-import
import {{nameCamel}} from '{{name}}';

// Init
import './support/index.js';

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect({{nameCamel}}).not.toBeUndefined();
	});
});
