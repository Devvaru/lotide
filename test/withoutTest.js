// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("returns ['a'] for ['a', 'b', 'c'], ['e', 'b', 'c']", () => {
    assert.deepEqual(without(['a', 'b', 'c'], ['e', 'b', 'c']), ['a']);
  });

  it("returns ['x'] for ['z', 'x', 'y'], ['y', 'z']", () => {
    assert.deepEqual(without(['z', 'x', 'y'], ['y', 'z']), ['x']);
  });
  
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'], ['lighthouse']", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });
});