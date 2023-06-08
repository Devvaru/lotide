// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 2 for [2, 4, 6, 8]", () => {
    assert.strictEqual(head([2, 4, 6, 8]), 2); 
  });

  it("returns 'cat' for ['cat', 'dog', 'giraffe']", () => {
    assert.strictEqual(head(['cat', 'dog', 'giraffe']), 'cat'); 
  });

  it("returns 164 for [164]", () => {
    assert.strictEqual(head([164]), 164); 
  });

  it("returns 'undefined' for empty array", () => {
    assert.strictEqual(head([])); 
  });
});