const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  let middle = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      let i1 = arr.length / 2;
      let i2 = (arr.length / 2) + 1;
      middle.push(i1, i2);
    } else {
      let i = (arr.length / 2) + 0.5;
      middle.push(i);
    }
  }
  return middle;
};

assertEqual(middle([1]).length, 0); // => []
assertEqual(middle([1, 2]).length, 0); // => []

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

