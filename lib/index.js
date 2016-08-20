/**
 * Find out a module.
 * @module findout
 * @version 2.0.2
 */
'use strict'

const findout = require('./findout')
const resolve = require('./resolve')
const pkg = require('../package.json')

let lib = findout.bind(this)

Object.assign(lib, {
  resolve,
  version: pkg.version
})

module.exports = lib
