/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
  let seen = [];
  let ans = [];
  let k = 0;
  let isConsecutive = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      seen.unshift(nums[i]);

      if (isConsecutive === true) {
        isConsecutive = false;
        k = 0;
      }
    } else {
      isConsecutive = true;
      k++;

      if (k <= seen.length) {
        ans.push(seen[k - 1]);
      } else {
        ans.push(-1);
      }
    }
  }

  return ans;
};

// let answer = lastVisitedIntegers([1, 2, -1, -1, -1]);
let answer = lastVisitedIntegers([1, -1, 2, -1, -1]);
console.log(answer);
