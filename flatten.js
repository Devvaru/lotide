const flatten = function(arr) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let element of item) {
        newArr.push(element);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = flatten;