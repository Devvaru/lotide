// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it("returns true for shirtObject and anotherShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for shirtObject and longSleeveShirtObject", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true for multiColorShirtObject and anotherMultiColorShirtObject", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  
  it("returns false for multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

  it("returns false for {a:1, b:2}, {b:1, a:1}", () => {
    assert.deepEqual(eqObjects({a:1, b:2}, {b:1, a:1}), false);
  });

  it("returns false for {a:1, b:2}, {b:2, a:2}", () => {
    assert.deepEqual(eqObjects({a:1, b:2}, {b:2, a:2}), false);
  });

  it("returns false for {a:1, b:[2,3]}, {a:2, b:[2,3]}", () => {
    assert.deepEqual(eqObjects({a:1, b:[2,3]}, {a:2, b:[2,3]}), false);
  });
  
  it("returns false for {a:[1,2], b:2}, {a:[1,2], b:3}", () => {
    assert.deepEqual(eqObjects({a:[1,2], b:2}, {a:[1,2], b:3}), false);
  });
});