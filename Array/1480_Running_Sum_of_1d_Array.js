/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let prefixSumArray = new Array(nums.length);
  prefixSumArray[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefixSumArray[i] = prefixSumArray[i - 1] + nums[i];
  }
  return prefixSumArray;
};

// let answer = runningSum([1, 2, 3, 4]);
// let answer = runningSum([1, 1, 1, 1, 1]);
let answer = runningSum([3, 1, 2, 10, 1]);
console.log(answer);
