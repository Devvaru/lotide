// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  
  it("returns [9, 2, 3, 4, 8, 24] for [9, [2, 3], [4], 8, [24]]", () => {
    assert.deepEqual(flatten([9, [2, 3], [4], 8, [24]]), [9, 2, 3, 4, 8, 24]);
  });
});