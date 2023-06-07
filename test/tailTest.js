const assertEqual = require('../assertEqual');
const tail = require('../tail');

let testArray = [1, 2, 3, 4];
let testArray2 = [5];
let testArray3 = [];

assertEqual(tail(testArray).length, 3);
assertEqual(tail(testArray2).length, 0);
assertEqual(tail(testArray3), undefined);