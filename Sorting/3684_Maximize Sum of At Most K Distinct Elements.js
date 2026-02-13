/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function (nums, k) {
  let sets = new Set();
  for (let n of nums) {
    sets.add(n);
  }

  let ans = Array.from(sets);
  return ans.sort((a, b) => b - a).slice(0, k);
};

const nums = [84, 93, 100, 77, 90];
const k = 3;
console.log(maxKDistinct(nums, k));
