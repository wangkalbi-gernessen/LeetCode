/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);
    let sum = 0;
    for (let j = start; j <= i; j++) {
      sum += nums[j];
    }

    res += sum;
  }

  return res;
};

const nums = [2, 3, 1];
console.log(subarraySum(nums));
