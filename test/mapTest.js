// const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for the first letter of each word", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns ['grounday', 'controlay', 'toay', 'majoray', 'tomay'] for words + ay", () => {
    assert.deepEqual(map(words, word => word + 'ay'), ['grounday', 'controlay', 'toay', 'majoray', 'tomay']);
  });
  
  it("returns [6, 7, 2, 5, 3] for the length of each word", () => {
    assert.deepEqual(map(words, word => word .length), [6, 7, 2, 5, 3]);
  });
});