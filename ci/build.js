#!/usr/bin/env node

/**
 * Run build
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    coz = require('coz');

apeTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud'
        ], callback);
    }
], true);

