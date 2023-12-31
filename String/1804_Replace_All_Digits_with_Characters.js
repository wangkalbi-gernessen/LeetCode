/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      res += shift(s[i - 1], s[i]);
    } else {
      res += s[i];
    }
  }
  return res;
};

let shift = (char, num) => {
  let shifted = char.charCodeAt(0) + parseInt(num);
  console.log(shifted);
  let letter = String.fromCharCode(shifted);
  return letter;
};

// let answer = replaceDigits("a1c1e1");
let answer = replaceDigits("a1b2c3d4e");
console.log(answer);
