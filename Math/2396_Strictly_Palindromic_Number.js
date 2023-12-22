/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  let base = 2;
  let lastBase = n - 2;
  while (base <= lastBase) {
    let baseNum = n.toString(base);
    console.log(baseNum);
    if (baseNum !== baseNum.split("").reverse().join("")) {
      return false;
    }
    base++;
  }
  return true;
};

// let answer = isStrictlyPalindromic(9);
let answer = isStrictlyPalindromic(4);
console.log(answer);
