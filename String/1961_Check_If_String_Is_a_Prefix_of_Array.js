/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let str = "";
  let k = words.length;
  let i = 0;
  while (i < k) {
    str += words[i];
    if (str === s) {
      return true;
    }
    i++;
  }
  return false;
};

// let answer = isPrefixString("iloveleetcode", [
//   "i",
//   "love",
//   "leetcode",
//   "apples",
// ]);
let answer = isPrefixString("iloveleetcode", [
  "apples",
  "i",
  "love",
  "leetcode",
]);
console.log(answer);
