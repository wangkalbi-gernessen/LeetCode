/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  let i = 1;
  while (i <= k) {
    let min = Math.min(...nums);
    let firstIndex = nums.indexOf(min);
    nums[firstIndex] *= multiplier;
    i++;
  }
  return nums;
};

let answer = getFinalState([2, 1, 3, 5, 6], 5, 2);
console.log(answer);
