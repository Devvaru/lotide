// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../aeqArrays');

const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [0] for 'Hello'.h", () => {
    assert.deepEqual(letterPositions('Hello').h, [0]);
  });

  it("returns [2, 3] for 'Hello'.l", () => {
    assert.deepEqual(letterPositions('Hello').l, [2, 3]);
  });

  it("returns [1, 11] for 'Lighthouse in the house'.i", () => {
    assert.deepEqual(letterPositions('Lighthouse in the house').i, [1, 11]);
  });

  it("returns [9, 16, 22] for 'Lighthouse in the house'.e", () => {
    assert.deepEqual(letterPositions('Lighthouse in the house').e, [9, 16, 22]);
  });

});