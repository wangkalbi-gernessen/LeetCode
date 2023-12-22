/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      count += 1;
    }
  }
  return count;
};

// let answer = prefixCount(["pay", "attention", "practice", "attend"], "at");
let answer = prefixCount(["leetcode", "win", "loops", "success"], "code");
console.log(answer);
