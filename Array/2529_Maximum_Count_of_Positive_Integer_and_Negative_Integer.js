/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos++;
    }
    if (nums[i] < 0) {
      neg++;
    }
  }
  return Math.max(pos, neg);
};

// let answer = maximumCount([-2, -1, -1, 1, 2, 3]);
let answer = maximumCount([5, 20, 66, 1314]);
console.log(answer);
