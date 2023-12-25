/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < words1.length; i++) {
    if (!map1.has(words1[i])) {
      map1.set(words1[i], 1);
    } else {
      map1.set(words1[i], map1.get(words1[i]) + 1);
    }
  }
  console.log(map1);

  for (let word of words2) {
    if (!map2.has(word)) {
      map2.set(word, 1);
    } else {
      map2.set(word, map2.get(word) + 1);
    }
  }
  console.log(map2);

  let count = 0;
  for (let word of words1) {
    if (map1.get(word) === 1 && map2.get(word) === 1) {
      count++;
    }
  }
  return count;
};

let answer = countWords(
  ["leetcode", "is", "amazing", "as", "is"],
  ["amazing", "leetcode", "is"]
);
// let answer = countWords(["a", "ab"], ["a", "a", "a", "ab"]);
console.log(answer);
