const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
//   }
// };

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  1: 'a',
  2: 'b'
};

const obj2 = {
  1: 'a',
  2: 'b'
};

const obj3 = {
  3: 'c',
  1: 'a',
  2: 'b'
};

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj2, obj3);
