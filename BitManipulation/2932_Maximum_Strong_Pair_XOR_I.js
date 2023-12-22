/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        output.push(nums[i] ^ nums[j]);
      }
    }
  }
  return Math.max(...output);
};

// let answer = maximumStrongPairXor([1, 2, 3, 4, 5]);
// let answer = maximumStrongPairXor([10, 100]);
let answer = maximumStrongPairXor([5, 6, 25, 30]);
console.log(answer);
