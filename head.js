const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([2, 4, 6, 8]), 2);
assertEqual(head(['cat', 'dog', 'giraffe']), 'cat');
assertEqual(head([164]), 164);
assertEqual(head([]));