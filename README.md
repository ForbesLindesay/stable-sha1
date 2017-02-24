# stable-sha1

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/stable-sha1.svg)](https://greenkeeper.io/)

Get a consistent sha1 hash for a JSON object in both browser and node

Inspired by shasum, but unlike [shasum](https://github.com/dominictarr/shasum) it is only 3.6KB once minified and gzipped.  It does this by only supporting shasums for objects, not for buffers.  It also achieves further savings by assuming a browser with support for `JSON` and using the relatively lightweight [rusha](https://github.com/srijs/rusha) instead of the very large [crypto-browserify](https://github.com/dominictarr/crypto-browserify).

[![Build Status](https://img.shields.io/travis/ForbesLindesay/stable-sha1/master.svg)](https://travis-ci.org/ForbesLindesay/stable-sha1)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/stable-sha1.svg)](https://david-dm.org/ForbesLindesay/stable-sha1)
[![NPM version](https://img.shields.io/npm/v/stable-sha1.svg)](https://www.npmjs.org/package/stable-sha1)

## Installation

    npm install stable-sha1


## Usage

```js
'use strict';

var assert = require('assert');
var sha = require('stable-sha1');

assert(sha({a: 1, b: 2, z: 3}) === sha({z: 3, b: 2, a: 1}));
assert(sha({a: 1, b: 2, z: 3}) !== sha({z: 3, b: 2, a: 2}));
```

## Contributing

Be sure to run tests before submitting a pull request.

```sh
$ npm install
```

```sh
$ npm test
tests passed
```

```sh
$ npm run browser
```

Load `http://localhost:3000` in your web browser and you should see "tests passed".

## License

  MIT
