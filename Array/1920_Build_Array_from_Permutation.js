/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

// let answer = buildArray([0, 2, 1, 5, 3, 4]);
let answer = buildArray([5, 0, 1, 2, 3, 4]);
console.log(answer);
