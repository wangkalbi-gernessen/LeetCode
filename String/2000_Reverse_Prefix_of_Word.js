/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  // 1. find the index of first occurrence of ch
  let firstIndex = word.indexOf(ch);
  //   console.log(firstIndex);
  // 2. reverse the String, word at the firstIndex
  let reversedString = "";
  for (let i = 0; i < word.length; i++) {
    reversedString += word[i];
    if (i === firstIndex) {
      reversedString = reversedString.split("").reverse().join("");
    }
  }
  console.log(reversedString);
  return reversedString;
};

let answer = reversePrefix("abcdefd", "d");
console.log(answer);
