/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let res = 0;
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result === 0 && b % result === 0) {
      res++;
    }
    result--;
  }
  return res;
};

// let answer = commonFactors(12, 6);
let answer = commonFactors(25, 30);
console.log(answer);
