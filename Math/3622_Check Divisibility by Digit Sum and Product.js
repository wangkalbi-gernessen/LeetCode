/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
  let sum = n
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reduce((acc, curr) => acc + curr, 0);
  let product = n
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reduce((acc, curr) => acc * curr, 1);

  console.log(sum, product);
  return n % (sum + product) === 0 ? true : false;
};

const n = 10;
console.log(checkDivisibility(n));
