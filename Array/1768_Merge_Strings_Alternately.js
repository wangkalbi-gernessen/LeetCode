/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let max = Math.max(word1.length, word2.length);
  console.log(max);

  let i = 0;
  while (i < max) {
    if (word1[i] !== undefined && word2[i] !== undefined) {
      res += word1.charAt(i);
      res += word2.charAt(i);
    } else if (word1[i] !== undefined) {
      res += word1.charAt(i);
    } else {
      res += word2.charAt(i);
    }
    i++;
  }
  return res;
};

let answer = mergeAlternately("abc", "pqr");
// let answer = mergeAlternately("ab", "pqrs");
console.log(answer);
