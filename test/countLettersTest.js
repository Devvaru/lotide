// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns object with number of letters for 'Once upon a time'", () => {
    assert.deepEqual(countLetters("Once upon a time"), {
      "o": 2,
      "n": 2,
      "c": 1,
      "e": 2,
      "u": 1,
      "p": 1,
      "a": 1,
      "t": 1,
      "i": 1,
      "m": 1
    });
  });

  it("returns object with number of letters for 'Hello World'", () => {
    assert.deepEqual(countLetters("Hello World"), {
      "h": 1,
      "e": 1,
      "l": 3,
      "o": 2,
      "w": 1,
      "r": 1,
      "d": 1
    });
  });

  it("returns an empty object for undefined", () => {
    assert.deepEqual(countLetters(undefined), {});
  });
});