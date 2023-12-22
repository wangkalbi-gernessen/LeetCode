/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabets.length; i++) {
    if (!sentence.includes(alphabets[i])) {
      return false;
    }
  }
  return true;
};

// let answer = checkIfPangram("thequickbrownfoxjumpsoverthelazydog");
// let answer = checkIfPangram("leetcode");
let answer = checkIfPangram("a");
console.log(answer);
