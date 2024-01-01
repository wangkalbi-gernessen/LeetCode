/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let n = num.length - 1;

  while (n >= 0) {
    if (parseInt(num[n]) % 2 !== 0) {
      return num.substring(0, n + 1);
    }
    n--;
  }
  return "";
};

// let answer = largestOddNumber("52");
// let answer = largestOddNumber("35427");
let answer = largestOddNumber("239537672423884969653287101");
console.log(answer);
