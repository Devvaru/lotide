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

module.exports = countOnly;