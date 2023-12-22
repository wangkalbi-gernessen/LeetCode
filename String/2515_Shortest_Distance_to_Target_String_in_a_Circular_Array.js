/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  let n = words.length;
  let res = 0;
  if (words[startIndex] === target) {
    return res;
  }
  let left = startIndex;
  let right = startIndex;

  while (startIndex !== (right + 1) % n || startIndex !== (left - 1 + n) % n) {
    res++;
    if (
      words[(right + 1) % n] === target ||
      words[(left - 1 + n) % n] === target
    ) {
      return res;
    }
    right++;
    left--;
  }
  return -1;
};

// let answer = closetTarget(
//   ["hello", "i", "am", "leetcode", "hello"],
//   "hello",
//   1
// );
// let answer = closetTarget(["a", "b", "leetcode"], "leetcode", 0);
let answer = closetTarget(["i", "eat", "leetcode"], "ate", 0);
console.log(answer);
