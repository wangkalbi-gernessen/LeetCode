/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let VOWELS = "aiueo";
  // create an array for all substrings of a string
  let substringArray = [];
  for (let i = 0; i < word.length; i++) {
    let substring = "";
    for (let j = i; j < word.length; j++) {
      substring += word.charAt(j);
      substringArray.push(substring);
    }
  }
  //   console.log(substringArray);

  function isVowel(char) {
    for (let i = 0; i < VOWELS.length; i++) {}
  }

  // check if an element of substringArray is a vowel substring
  let count = 0;
  for (let i = 0; i < substringArray.length; i++) {
    for (let j = 0; j < substringArray[i].length; j++) {}
  }
};

let answer = countVowelSubstrings("aeiouu");
console.log(answer);
