const findKeyByValue = (obj, val) => {
  for (let item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
};

module.exports = findKeyByValue;