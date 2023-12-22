/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let VOWELS = "aiueo";
  let vowelStringCount = 0;
  let i = left;
  while (i <= right) {
    if (
      VOWELS.includes(words[i].charAt(0)) &&
      VOWELS.includes(words[i].charAt(words[i].length - 1))
    ) {
      vowelStringCount++;
    }
    i++;
  }

  return vowelStringCount;
};

// let answer = vowelStrings(["are", "amy", "u"], 0, 2);
let answer = vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4);
console.log(answer);
