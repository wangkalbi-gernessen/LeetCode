/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let i = 0;
  while (i < k) {
    let min = Math.min(...nums);
    let indexOf = nums.indexOf(min);
    nums[indexOf] = min * -1;
    i++;
  }
  let sum = nums.reduce((accumlator, num) => accumlator + num, 0);
  return sum;
};

// let answer = largestSumAfterKNegations([3, -1, 0, 2], 3);
let answer = largestSumAfterKNegations([2, -3, -1, 5, -4], 2);
console.log(answer);
