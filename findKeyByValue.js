const findKeyByValue = (obj, val) => {
  for (let item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }
};

module.exports = findKeyByValue;

// Alternate solution via Larry bot

// const findKeyByValue = (obj, val) => {
//   const keys = Object.keys(obj);
//   for(let i = 0; i < keys.length; i++) {
//     if(obj[keys[i]] === val) {
//       return keys[i];
//     }
//   }
// };