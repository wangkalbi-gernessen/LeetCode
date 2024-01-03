/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 1. create all substrings of a string
  let substringsArray = [];
  for (let i = 0; i < s.length; i++) {
    let substr = "";
    for (let j = i; j < s.length; j++) {
      substr += s.charAt(j);
      substringsArray.push(substr);
    }
  }
  // console.log(substringsArray);

  // 2. narrow down to an array for substrings without repeating characters
  let nonRepeatingSubstrs = [];
  for (let i = 0; i < substringsArray.length; i++) {
    let exists = new Set();
    for (let j = 0; j < substringsArray[i].length; j++) {
      if (!exists.has(substringsArray[i][j])) {
        exists.add(substringsArray[i][j]);
      } else {
        break;
      }
    }
    nonRepeatingSubstrs.push(exists);
  }
  //   console.log(nonRepeatingSubstrs);

  //   3. Sort the Array, nonRepeatingSubstrs by descending.
  let largest = 0;
  nonRepeatingSubstrs.forEach(function (value) {
    // console.log(value.size);
    if (value.size > largest) {
      largest = value.size;
    }
  });
  //   console.log(largest);
  return largest;
};

// let answer = lengthOfLongestSubstring("abcabcbb");
// let answer = lengthOfLongestSubstring("pwwkew");
// let answer = lengthOfLongestSubstring("bbbbb");
let answer = lengthOfLongestSubstring("abcd");
console.log(answer);
