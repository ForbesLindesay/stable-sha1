'use strict';

var hasGlobal = typeof window !== 'undefined' && ('Rusha' in window);
var priorValue = hasGlobal && window.Rusha;

var Rusha = require('rusha')
var stringify = require('stable-stringify')

if (typeof window !== 'undefined' && ('Rusha' in window)) {
  if (!hasGlobal) {
    delete window.Rusha
  } else {
    window.Rusha = priorValue;
  }
}

var r = new Rusha;

module.exports = function (obj) {
  return r.digest(stringify(obj));
};
