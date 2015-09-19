/**
 * Find out a module.
 * @module findout
 * @version 1.2.1
 */
"use strict";

var findout = require('./findout'),
    pkg = require('../package.json');

var lib = findout.bind(this);
lib.version = pkg.version;
module.exports = lib;
