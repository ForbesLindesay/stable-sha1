'use strict';

var Rusha = require('rusha')
var stringify = require('stable-stringify')

var r = new Rusha;

module.exports = function (obj) {
  return r.digest(stringify(obj));
};
