/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let b = false;
  for (let i = 0; i < s.length; i++) {
    if (b === true && s[i] === "a") {
      return false;
    }

    if (s[i] === "b") {
      b = true;
    }
  }
  return true;
};

// let answer = checkString("abab");
let answer = checkString("aaabbb");
console.log(answer);
