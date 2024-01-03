/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let n = s.length;
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    let res = 0;
    // single character is palindrome
    res += n;
    // check if s(word) is palindrome
    if (s === s.split("").reverse().join("")) {
      res++;
    }
  } else {
    // check if other substrings are palindrome
    for (let i = 1; i < s.length - 1; i++) {
      let substring = s.substring(i - 1, i + 1);
      console.log(substring);

      if (isPalindrome(substring) === true) {
        res++;
      }
    }
    return res;
  }
};

let isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");

  return str === reversed ? true : false;
};

// let answer = countSubstrings("abc");
// let answer = countSubstrings("aa");
let answer = countSubstrings("aaa");
console.log(answer);
