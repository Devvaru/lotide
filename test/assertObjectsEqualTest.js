const assertObjectsEqual = require('../assertObjectsEqual');

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