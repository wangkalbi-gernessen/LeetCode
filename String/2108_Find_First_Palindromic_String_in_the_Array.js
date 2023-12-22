/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let firstOccurrence;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      firstOccurrence = words[i];
      break;
    } else {
      firstOccurrence = "";
    }
  }
  return firstOccurrence;
};

// let answer = firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
// let answer = firstPalindrome(["notapalindrome", "racecar"]);
let answer = firstPalindrome(["def", "ghi"]);
console.log(answer);
