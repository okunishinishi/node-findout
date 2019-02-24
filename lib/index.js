/**
 * Find out a module.
 * @module findout
 * @version 3.0.2
 */
'use strict'

const findout = require('./findout')
const resolve = require('./resolve')

let lib = findout.bind(this)

Object.assign(lib, {
  resolve
})

module.exports = lib
