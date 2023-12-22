/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let map = new Map();
  paragraph = paragraph
    .toLowerCase()
    .split(/[!?',;. ]/)
    .map((word) => word.replace(/ /g, ""))
    .filter((word) => word !== "");

  console.log(paragraph);

  for (let i = 0; i < paragraph.length; i++) {
    if (banned.indexOf(paragraph[i]) === -1) {
      if (!map.has(paragraph[i])) {
        map.set(paragraph[i], 1);
      } else {
        map.set(paragraph[i], map.get(paragraph[i]) + 1);
      }
    }
  }
  //   console.log(map);
  let largest = Math.max(...map.values());
  let res;
  //   console.log(largest);
  for (let [key, value] of map) {
    if (value === largest) {
      res = key;
    }
  }
  return res;
};

let answer = mostCommonWord(
  "Bob hit a ball, the hit BALL flew far after it was hit.",
  ["hit"]
);
// let answer = mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);
console.log(answer);
