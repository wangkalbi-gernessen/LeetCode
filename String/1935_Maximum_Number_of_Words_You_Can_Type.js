/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let textArray = text.split(" ");
  //   console.log(textArray);
  let regex = new RegExp("[" + brokenLetters + "]", "g");
  //   console.log(regex);
  let count = 0;
  for (let i = 0; i < textArray.length; i++) {
    console.log(regex);
    if (textArray[i].search(regex) === -1) {
      count++;
    }
  }
  return count;
};

let answer = canBeTypedWords("hello world", "ad");
// let answer = canBeTypedWords("leet code", "e");
console.log(answer);
