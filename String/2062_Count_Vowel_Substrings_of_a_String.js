/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let res = 0;
  // create an array for all substrings of a string
  let substringArray = [];
  for (let i = 0; i < word.length; i++) {
    let substring = "";
    for (let j = i; j < word.length; j++) {
      substring += word.charAt(j);
      console.log(substring);
      if (isAllVowels(substring) === true) {
        res++;
      }
    }
  }
  return res;
};

let isAllVowels = (substring) => {
  let VOWELS = "aiueo";
  for (let char of VOWELS) {
    if (substring.includes(char) === false) {
      return false;
    }
  }
  return true;
};

// let answer = countVowelSubstrings("aeiouu");
let answer = countVowelSubstrings("cuaieuouac");
console.log(answer);
