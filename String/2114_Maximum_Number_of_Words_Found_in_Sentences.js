/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let currentLargest = 0;
  for (let i = 0; i < sentences.length; i++) {
    let currentLength = sentences[i].split(" ").length;
    // console.log(currentLength);
    if (currentLargest < currentLength) {
      currentLargest = currentLength;
    }
  }
  return currentLargest;
};

// let answer = mostWordsFound([
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks very much",
// ]);
let answer = mostWordsFound([
  "please wait",
  "continue to fight",
  "continue to win",
]);
console.log(answer);
