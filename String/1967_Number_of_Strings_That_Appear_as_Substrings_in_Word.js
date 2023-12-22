/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let count = 0;
  let wordArr = [];
  for (let i = 0; i < word.length; i++) {
    let substring = "";
    for (let j = i; j < word.length; j++) {
      substring += word.charAt(j);
      wordArr.push(substring);
    }
  }

  console.log(wordArr);

  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) {
      count += 1;
    }
  }

  return count;
};

// let answer = numOfStrings(["a", "abc", "bc", "d"], "abc");
let answer = numOfStrings(["a", "b", "c"], "aaaaabbbbb");
// let answer = numOfStrings(["a", "a", "a"], "ab");
console.log(answer);
