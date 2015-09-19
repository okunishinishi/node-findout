/**
 * Findout a module
 * @function findout
 * @param {string} name - Module name.
 * @param {object} [options] - Optional settings.
 * @param {string} [options.cwd] - Current working directory.
 * @returns {*} - Resolved module
 * @throws - Module not found error.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    _isModule = require('./_is_module');


/** @lends findout */
function findout(name, options) {
    var args = argx(arguments);
    name = args.shift();
    options = args.pop('object') || {};
    var resolved = findout.resolve(name, options);
    return require(resolved);
}

/**
 * Resolve to findout.
 * @function findout.resolve
 * @param name
 * @param options
 * @returns {*} - Resolved module.
 * @throws - Module not found error.
 */
findout.resolve = function (name, options) {
    if (_isModule(name)) {
        return name;
    }
    var basedir = options.cwd || process.cwd();
    do {

        var fromDir = path.join(basedir, name);
        if (_isModule(fromDir)) {
            return fromDir;
        }
        var fromNodeModulesDir = path.join(basedir, 'node_modules', name);
        if (_isModule(fromNodeModulesDir)) {
            return fromNodeModulesDir;
        }

        var parentBasedir = path.dirname(basedir);
        if (parentBasedir === basedir) {
            break;
        }
        basedir = parentBasedir;
    } while (true);

    throw new Error('Module not found: ' + name);
};


module.exports = findout;