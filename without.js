const without = function(srcArr, itemsToRemoveArr) {
  let newArr = [];
  for (let item of srcArr) {
    let toRemove = false;
    for (let remove of itemsToRemoveArr) {
      if (item === remove) {
        toRemove = true;
        break;
      }
    }
    if (!toRemove) {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = without;