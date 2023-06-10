# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @devvaru/lotide`

**Require it:**

`const _ = require('@devvaru/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: takes in two primitive values and logs whether they are equal
* `assertArraysEqual(arr1, arr2)`: takes in two arrays and logs whether they are equal
* `eqArrays(arr1, arr2)`: takes in two arrays and returns true or false whether they are equal
* `assertObjectsEqual(actual, expected)`: takes in two objects and logs whether they are equal
* `eqObjects(object1, object2)`: takes in two objects and returns true or false whether they are equal
* `head(arr)`: returns the first value in an array
* `tail(arr)`: returns array without the first value in the array
* `without(srcArr, itemsToRemoveArr)`: takes in a source array and an array with items to remove. Returns a new array with the items removed
* `flatten(arr)`: returns a non nested array from a nested array
* `middle(arr)`: returns the middle value(s) of an array
* `countOnly(allItemsArr, itemsToCountObj)`: returns the amount of times a value (itemsToCountObj) appears in an array (allItemsArr), if the value is truthy
* `countLetters(sentence)`: returns the amount of times a letter appears in an object
* `letterPositions(sentence)`: returns the index(es) of a letter in a string
* `findKeyByValue(obj, val)`: returns the key of an object based on the value
* `map(arr, callback)`: returns a new array after iterating over each element of a given array
* `takeUntil(arr, callback)`: iterates over and returns an array up until a condition is met
* `findKey(obj, callback)`: returns the key of a nested object based on a nested value
