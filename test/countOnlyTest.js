// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns Fang: 2, Jason: 1 for firstNames and callback", () => {
    assert.deepEqual(countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    }), {"Fang": 2, "Jason": 1});
  });

  it("returns Salima: 2, Fang: 2 for firstNames and callback", () => {
    assert.deepEqual(countOnly(firstNames, {
      "Salima": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    }), {"Salima": 2, "Fang": 2});
  });

  it("returns {} for empty array", () => {
    assert.deepEqual(countOnly([], {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    }), {});
  });

  it("returns {} for empty itemsToCount object", () => {
    assert.deepEqual(countOnly(firstNames, {}), {});
  });
});