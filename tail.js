const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

let testArray = [1, 2, 3, 4];
let testArray2 = [5];
let testArray3 = [];
let newArr;

const tail = function(arr) {
  let newArr = [];
  
  if (arr.length >= 1) {
    newArr = arr.slice(1);
    return newArr;
  } else {
    newArr = undefined;
  }

}

console.log(tail(testArray));
console.log(tail(testArray2));
console.log(tail(testArray3));

assertEqual(tail(testArray).length, 3);
assertEqual(tail(testArray2).length, 0);
assertEqual(tail(testArray3), undefined);
