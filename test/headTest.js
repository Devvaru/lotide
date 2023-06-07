const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([2, 4, 6, 8]), 2);
assertEqual(head(['cat', 'dog', 'giraffe']), 'cat');
assertEqual(head([164]), 164);
assertEqual(head([]));