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

* `assertEqual`: compare two primitive values
* `assertArraysEqual`: compare two arrays in console log
* `eqArrays`: compare two arrays
* `assertObjectsEqual`: compare two objects in console log
* `eqObjects`: compare two objects
* `head`: return the first value in an array
* `tail`: return array without the first value in the array
* `without`: return array without a specified part of the array
* `flatten`: return a non nested array from a nested array
* `middle`: return the middle value(s) of an array
* `countOnly`: return the amount of times a value appears in an object, if the value is truthy
* `countLetters`: return the amount of times a letter appears in an object
* `letterPositions`: return the indexes of a letter in a string
* `findKeyByValue`: return the key of an object based on the value
* `map`: return a new array after iterating over each element of a given array
* `takeUntil`: return an array up until a condition is met
* `findKey`: return the key of a nested object based on a nested value
