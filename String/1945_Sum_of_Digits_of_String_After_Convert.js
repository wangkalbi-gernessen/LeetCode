/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let digits = "";
  for (let i = 0; i < s.length; i++) {
    digits += s.charCodeAt(i) - 96;
  }
  //   console.log(digits.toString().split(""));
  let i = 1;
  while (i <= k) {
    digits = digits
      .toString()
      .split("")
      .reduce((accumlator, num) => accumlator + parseInt(num), 0);
    i++;
  }

  return digits;
};

// let answer = getLucky("iiii", 1);
let answer = getLucky("leetcode", 2);
console.log(answer);
