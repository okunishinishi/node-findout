/**
 * Unit test for findout.
 * Runs with nodeunit.
 */

"use strict";

var findout = require('../lib/findout');

exports['Do findout.'] = function (test) {
    test.ok(findout(__filename));
    test.throws(function () {
        findout('__invalid_module_name_______');
    });
    test.doesNotThrow(function () {
        findout('__invalid_module_name_______', {
            safe: true
        });
    });
    test.done();
};
