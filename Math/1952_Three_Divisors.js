/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let count = 0;
  let divisor = 1;
  while (divisor <= n) {
    if (count <= 3) {
      count += n % divisor === 0 ? 1 : 0;
    } else {
      return false;
    }
    divisor++;
  }
  return count === 3;
};

let answer = isThree(4);
console.log(answer);
