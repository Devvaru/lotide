// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns empty array for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("returns undefined for empty array", () => {
    assert.deepEqual(tail([]), undefined);
  });
});