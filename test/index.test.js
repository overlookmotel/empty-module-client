/* --------------------
 * {{name}} module
 * Tests
 * ------------------*/

// Modules
import {{nameCamel}} from '{{name}}';

// Init
import './support/index.js';

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect({{nameCamel}}).not.toBeUndefined();
	});
});
