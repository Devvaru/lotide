const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const string = "Once upon a time";
const countLetters = function(sentence) {
  // return count of each letter in sentence
  let result = {};
  sentence = sentence.toLowerCase();
  for (let letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const results = countLetters(string, {
  "o": 2,
  "n": 2,
  "u": 1,
  "b": 0,
  "p": 1
});

console.log(countLetters(string));

assertEqual(results["n"], 2);
assertEqual(results["u"], 1);
assertEqual(results["p"], 1);

module.exports = countLetters;
