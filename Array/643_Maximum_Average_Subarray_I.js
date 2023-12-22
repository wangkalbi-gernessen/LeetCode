/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let arr = [];
  let max = -10;
  console.log(max);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let ans = [];
      let avg = 0;
      for (let m = i; m <= j; m++) {
        ans.push(nums[m]);
      }
      if (ans.length === k) {
        avg = ans.reduce((a, b) => a + b) / k;
        max = max < avg ? avg : max;
      }
    }
  }
  return max;
};

// let answer = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// let answer = findMaxAverage([5], 1);
let answer = findMaxAverage([-1], 1);
console.log(answer);
