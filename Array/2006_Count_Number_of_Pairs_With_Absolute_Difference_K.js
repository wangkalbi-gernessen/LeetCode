/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i < j && Math.abs(nums[i] - nums[j]) === k) {
        res++;
      }
    }
  }
  return res;
};

// let answer = countKDifference([1, 2, 2, 1], 1);
let answer = countKDifference([1, 3], 3);
console.log(answer);
