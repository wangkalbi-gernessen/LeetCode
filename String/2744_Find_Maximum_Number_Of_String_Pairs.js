/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let reversed = words[j].split("").reverse().join("");
      console.log(reversed);
      if (i !== j && words[i] === reversed) {
        count += 1;
      }
    }
  }
  return count;
};

// let answer = maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]);
let answer = maximumNumberOfStringPairs(["ab", "ba", "cc"]);
console.log(answer);
