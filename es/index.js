/* --------------------
 * {{name}} module
 * ESM Entry point
 * Re-export in tree-shakable form, choosing dev or prod build based on NODE_ENV.
 * ------------------*/

// Imports
import {{nameCamel}}Prod from '../dist/esm/{{name}}.min.js';
import {{nameCamel}}Dev from '../dist/esm/{{name}}.js';

// Exports

export default process.env.NODE_ENV === 'production'
	? {{nameCamel}}Prod
	: {{nameCamel}}Dev;

/*
// Alternative for named exports

// Imports
import {
	method1 as method1Prod,
	method2 as method2Prod
} from '../dist/esm/{{name}}.min.js';

import {
	method1 as method1Dev,
	method2 as method2Dev
} from '../dist/esm/{{name}}.js';

// Exports

export const method1 = process.env.NODE_ENV === 'production'
	? method1Prod
	: method1Dev;
export const method2 = process.env.NODE_ENV === 'production'
	? method2Prod
	: method2Dev;
*/
