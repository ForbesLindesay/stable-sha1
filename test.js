'use strict';

var assert = require('assert');
var sha = require('./index.js');
var shaB = require('./browser.js');


assert(sha({a: 1, b: 2, z: 3}) === sha({z: 3, b: 2, a: 1}));
assert(sha({a: 1, b: 2, z: 3}) !== sha({z: 3, b: 2, a: 2}));

assert(shaB({a: 1, b: 2, z: 3}) === shaB({z: 3, b: 2, a: 1}));
assert(shaB({a: 1, b: 2, z: 3}) !== shaB({z: 3, b: 2, a: 2}));

assert(sha({a: 1, b: 2, z: 3}) === shaB({z: 3, b: 2, a: 1}));

console.log('tests passed');
