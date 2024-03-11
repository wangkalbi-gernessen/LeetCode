/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;
  if (nums.length === 1) {
    return operations;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= nums[i + 1]) {
        operations += nums[i] + 1 - nums[i + 1];
        nums[i + 1] = nums[i] + 1;
      }
    }
  }
  return operations;
};

let answer = minOperations([1, 5, 2, 4, 1]);
console.log(answer);
