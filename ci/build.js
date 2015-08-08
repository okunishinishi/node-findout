#!/usr/bin/env node

/**
 * Run build
 */

"use strict";

var path = require('path'),
    apeTasking = require('ape-tasking'),
    coz = require('coz');

var basedir = path.resolve(__dirname, '..');

process.chdir(basedir);

apeTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud'
        ], callback);
    }
], true);

