const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function (srcArr, itemsToRemoveArr) {
  let newArr = [];
  for (let item of srcArr) {
    let toRemove = false;
    for (let remove of itemsToRemoveArr) {
      if (item === remove) {
        toRemove = true;
        break;
      }
    }
    if (!toRemove) {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(['a', 'b', 'c'], ['e', 'b', 'c'])) // => ["a"]
console.log(without(['z', 'x', 'y'], ['y', 'z'])) // =< ["x"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

