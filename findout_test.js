/**
 * Unit test for findout.
 * Runs with nodeunit.
 */

"use strict";

var findout = require('./findout');

exports['Do resolve.'] = function (test) {
    test.equal(findout.resolve(__filename), __filename);
    test.throws(function () {
        findout.resolve('__invalid_module_name_______');
    });
    test.done();
};


exports['Do findout.'] = function (test) {
    test.ok(findout(__filename));
    test.throws(function () {
        findout('__invalid_module_name_______');
    });
    test.done();
};
