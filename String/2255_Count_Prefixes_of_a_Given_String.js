/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  return words.filter((item) => s.startsWith(item)).length;
};

let answer = countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc");
// let answer = countPrefixes(["a", "a"], "aa");
console.log(answer);
