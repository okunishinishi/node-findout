/**
 * Test for index.js
 * Runs with nodeunit.
 */

"use strict";

var index = require('../lib/index.js');

exports['Eval properties.'] = function(test){
    Object.keys(index).forEach(function(key){
        test.ok(key);
        test.ok(index[key]);
    });
    test.ok(index.resolve);
    test.done();
};
