/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let output = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      output.push(i);
    }
  }
  return output;
};

// let answer = findWordsContaining(["leet", "code"], "e");
// let answer = findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
let answer = findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z");
console.log(answer);
