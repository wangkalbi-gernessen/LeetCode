/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  console.log(nums);
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[0]
  );
};

let answer = maximumProduct([-1, -2, -3, 1, 6]);
console.log(answer);
