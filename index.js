'use strict';

var crypto = require('crypto')
var stringify = require('stable-stringify')

module.exports = function (obj) {
  return crypto.createHash('sha1').update(stringify(obj), 'utf8').digest('hex');
};
