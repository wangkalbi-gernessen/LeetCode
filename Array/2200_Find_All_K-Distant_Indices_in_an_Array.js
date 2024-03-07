/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(i - j) <= k && nums[j] === key) {
        res.push(i);
        break;
      }
    }
  }
  return res.sort((a, b) => a - b);
};

// let answer = findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1);
let answer = findKDistantIndices([2, 2, 2, 2, 2], 2, 2);
console.log(answer);
