const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItemsArr, itemsToCountObj) {
  const results = {};
  for (const item of allItemsArr) {
    // Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
    if (itemsToCountObj[item]) {
      // count how many times a name shows up
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [ //allItemsArr
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { // itemsToCountObj, calling function on these
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);