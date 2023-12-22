/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  //   console.log(nums);
  let output = 0;
  for (let i = 0; i < nums.length; i += 2) {
    output += Math.min(nums[i], nums[i + 1]);
  }
  return output;
};

let answer = arrayPairSum([6, 2, 6, 5, 1, 2]);
console.log(answer);
