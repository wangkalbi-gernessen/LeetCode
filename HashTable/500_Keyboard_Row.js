/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let firstRow = "qwertyuiop";
  let secondRow = "asdfghjkl";
  let thirdRow = "zxcvbnm";
  let res = [];

  for (let word of words) {
    let set = new Set();
    for (let char of word) {
      if (firstRow.includes(char.toLowerCase())) {
        set.add(1);
      } else if (secondRow.includes(char.toLowerCase())) {
        set.add(2);
      } else {
        set.add(3);
      }
    }

    if (set.size === 1) {
      res.push(word);
    }
  }
  return res;
};

let answer = findWords(["Hello", "Alaska", "Dad", "Peace"]);
console.log(answer);
