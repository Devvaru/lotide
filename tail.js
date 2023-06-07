const tail = function(arr) {
  let newArr = [];
  
  if (arr.length >= 1) {
    newArr = arr.slice(1);
    return newArr;
  } else {
    newArr = undefined;
  }
}

module.exports = tail;
