/**
 * Findout a module
 * @function findout
 * @param {string} name - Module name.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.cwd=process.cwd()] - Current working directory.
 * @param {boolean} [options.safe=false] - No throw when not found.
 * @returns {*} - Resolved module
 * @throws - Module not found error.
 */

"use strict";

var argx = require('argx'),
    resolve = require('./resolve');


/** @lends findout */
function findout(name, options) {
    var args = argx(arguments);
    name = args.shift();
    options = args.pop('object') || {};
    var resolved = resolve(name, options);
    if (resolved) {
        return require(resolved);
    } else {
        return null;
    }
}

module.exports = findout;