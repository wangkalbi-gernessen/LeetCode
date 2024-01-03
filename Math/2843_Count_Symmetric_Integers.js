/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let res = 0;
  while (low <= high) {
    let digits = low.toString();
    if (digits.length % 2 === 0) {
      let first = digits
        .substring(0, digits.length / 2)
        .split("")
        .reduce((total, num) => total + parseInt(num), 0);
      let last = digits
        .substring(digits.length / 2, digits.length)
        .split("")
        .reduce((total, num) => total + parseInt(num), 0);
      res += parseInt(first) === parseInt(last) ? 1 : 0;
    }
    low++;
  }
  return res;
};

let answer = countSymmetricIntegers(1200, 1230);
console.log(answer);
