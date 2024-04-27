/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const set = new Set([...word]);
  const letters = "abcdefghijklmnopqrstuvwxyz";

  //   console.log(set);

  let count = 0;
  for (let letter of letters) {
    if (set.has(letter) && set.has(letter.toUpperCase())) {
      count++;
    }
  }
  return count;
};

let answer = numberOfSpecialChars("aaAbcBC");
console.log(answer);
