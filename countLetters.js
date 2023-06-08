const countLetters = function(sentence) {
  let result = {};
  if (sentence) {
    sentence = sentence.toLowerCase();
    for (let letter of sentence) {
      if (letter !== " ") {
        if (result[letter]) {
          result[letter] += 1;
        } else {
          result[letter] = 1;
        }
      }
    }
  }
  
  return result;
};

module.exports = countLetters;