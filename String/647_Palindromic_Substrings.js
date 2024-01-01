/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 1) {
    return 1;
  } else {
    let res = 0;

    // single character is palindrome
    res += s.length;

    // check if s(word) is palindrome
    if (s === s.split("").reverse().join("")) {
      res++;
    }

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
