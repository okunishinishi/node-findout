/**
 * Find out a module.
 * @module findout
 * @version 1.2.3
 */
"use strict";

var findout = require('./findout'),
    resolve = require('./resolve'),
    pkg = require('../package.json');

var lib = findout.bind(this);
lib.version = pkg.version;
lib.resolve = resolve;
module.exports = lib;
