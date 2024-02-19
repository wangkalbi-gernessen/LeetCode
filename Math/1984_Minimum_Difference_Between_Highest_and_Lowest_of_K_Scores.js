/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1 && nums.length === 1) {
    return nums[0] - nums[0];
  }
  nums.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    min = Math.min(min, nums[i + k - 1] - nums[i]);
  }
  return min;
};

// let answer = minimumDifference([90], 1);
let answer = minimumDifference([9, 4, 1, 7], 2);
// let answer = minimumDifference([9, 4, 1, 7, 6], 3);
console.log(answer);
