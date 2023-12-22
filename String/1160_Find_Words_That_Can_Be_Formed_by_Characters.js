/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let sortedChars = chars.split("").sort().join("");
  //   console.log(sortedChars);
  let sumOfLength = 0;
  for (let i = 0; i < words.length; i++) {
    let sortedWord = words[i].split("").sort().join("");
    console.log(sortedWord);
    if (sortedChars.includes(sortedWord)) {
      sumOfLength += sortedWord.length;
      console.log("good");
    }
  }
  return sumOfLength;
};

let answer = countCharacters(["cat", "bt", "hat", "tree"], "atach");
console.log(answer);
