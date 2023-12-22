/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  let gcdValue = gcd(2, n);
  return (2 * n) / gcdValue;
};

var gcd = function (a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
};

let answer = smallestEvenMultiple(6);
console.log(answer);
