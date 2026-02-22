/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }

  // console.log(nums);
  return nums.sort((a, b) => a - b);
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
