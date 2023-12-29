/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i]) === true) {
        res.push(words[i]);
        break;
      }
    }
  }
  return res;
};

// let answer = stringMatching(["mass", "as", "hero", "superhero"]);
// let answer = stringMatching(["leetcode", "et", "code"]);
// let answer = stringMatching(["blue", "green", "bu"]);
let answer = stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]);
console.log(answer);
