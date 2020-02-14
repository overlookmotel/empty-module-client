/* --------------------
 * {{name}} module
 * Tests
 * ------------------*/

'use strict';

// Modules
const {{nameCamel}} = require('../index');

// Init
require('./support');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect({{nameCamel}}).not.toBeUndefined();
	});
});
