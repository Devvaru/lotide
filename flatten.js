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

const flatten = function(arr) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let element of item) {
        newArr.push(element);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([9, [2, 3], [4], 8, [24]]), [9, 2, 3, 4, 8, 24]);