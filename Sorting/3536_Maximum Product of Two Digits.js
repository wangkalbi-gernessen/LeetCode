/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
  let nString = n
    .toString()
    .split("")
    .map((n) => parseInt(n))
    .sort((a, b) => b - a);

  return nString[0] * nString[1];
};

const n = 124;
console.log(maxProduct(n));
