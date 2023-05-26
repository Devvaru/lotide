const eqArrays = function(arr1, arr2) {
  let allTrue;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      allTrue = true;
    }
  }
  return allTrue;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};

const string = 'Hello';
const string2 = 'Lighthouse in the house';

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions(string).h, [0]);
assertArraysEqual(letterPositions(string).l, [2, 3]);
assertArraysEqual(letterPositions(string2).i, [1, 11]);
assertArraysEqual(letterPositions(string2).e, [9, 16, 22]);
