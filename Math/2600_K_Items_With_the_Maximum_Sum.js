/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let res = 0;
  let i = 1;
  while (i <= k) {
    if (numOnes !== 0) {
      res++;
      numOnes--;
    } else if (numZeros !== 0) {
      numZeros--;
    } else {
      res--;
      numNegOnes--;
    }
    i++;
  }
  return res;
};

// let answer = kItemsWithMaximumSum(3, 2, 0, 2);
let answer = kItemsWithMaximumSum(3, 2, 0, 4);
console.log(answer);
