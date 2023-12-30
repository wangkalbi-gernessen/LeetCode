/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let lastIndex = nums.length - 1;
  let sorted = nums.sort((a, b) => b - a);
  return sorted[0] * sorted[1] - sorted[lastIndex] * sorted[lastIndex - 1];
};

let answer = maxProductDifference([5, 6, 2, 7, 4]);
console.log(answer);
