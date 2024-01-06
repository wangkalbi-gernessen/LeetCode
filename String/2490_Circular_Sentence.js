/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  sentence = sentence.split(" ");
  console.log(sentence);
  for (let i = 0; i < sentence.length; i++) {
    if (i !== sentence.length - 1) {
      if (
        sentence[i].charAt(sentence[i].length - 1) !== sentence[i + 1].charAt(0)
      ) {
        return false;
      }
    } else {
      if (
        sentence[i].charAt(sentence[i].length - 1) !==
        sentence[(i + 1) % sentence.length].charAt(0)
      ) {
        return false;
      }
    }
  }
  return true;
};

let answer = isCircularSentence("leetcode exercises sound delightful");
console.log(answer);
