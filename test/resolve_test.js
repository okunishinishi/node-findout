/**
 * Test case for resolve.
 * Runs with nodeunit.
 */

var resolve = require('../lib/resolve.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Do resolve.'] = function (test) {
    test.equal(resolve(__filename), __filename);
    test.throws(function () {
        resolve('__invalid_module_name_______');
    });
    test.done();
};
