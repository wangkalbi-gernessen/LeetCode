/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  let res = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i] % 2 === 0 ? 0 : 1;
  }

  return res.sort((a, b) => a - b);
};

const nums = [4, 3, 2, 1];
console.log(transformArray(nums));
