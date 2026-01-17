/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let targets = [];
  for (let i = 0; i < nums.length; i++) {
    targets.splice(index[i], 0, nums[i]);
  }

  return targets;
};

const nums = [0, 1, 2, 3, 4];
const indexes = [0, 1, 2, 2, 1];
console.log(createTargetArray(nums, indexes));
