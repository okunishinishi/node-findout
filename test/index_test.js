/**
 * Test for index.js
 * Runs with mocha.
 */

'use strict'

const index = require('../lib/index.js')

const assert = require('assert')

it('Eval properties.', () => {
  Object.keys(index).forEach((key) => {
    assert.ok(key)
    assert.ok(index[ key ])
  })
  assert.ok(index.resolve)
})

/* global it */
