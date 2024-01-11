/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closest = Math.abs(nums[0]);
  let key = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (closest > Math.abs(nums[i])) {
      closest = Math.abs(nums[i]);
      key = nums[i];
    } else if (closest === Math.abs(nums[i]) && key < nums[i]) {
      key = nums[i];
    }
  }
  return key;
};

// let answer = findClosestNumber([-4, -2, 1, 4, 8]);
// let answer = findClosestNumber([-4, -2, 5, 2, 8]);
let answer = findClosestNumber([-4, 4]);
console.log(answer);
