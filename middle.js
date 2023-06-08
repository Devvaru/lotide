const middle = function(arr) {
  let middle = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      let i1 = arr.length / 2;
      let i2 = (arr.length / 2) + 1;
      middle.push(i1, i2);
    } else {
      let i = (arr.length / 2) + 0.5;
      middle.push(i);
    }
  }
  return middle;
};

module.exports = middle;