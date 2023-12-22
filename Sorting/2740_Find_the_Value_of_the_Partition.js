/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  //   console.log(sorted);
  let smallest = Infinity;

  for (let i = 1; i < sorted.length; i++) {
    smallest = Math.min(smallest, Math.abs(nums[i] - nums[i - 1]));
  }
  return smallest;
};

let answer = findValueOfPartition([1, 3, 2, 4]);
// let answer = findValueOfPartition([100, 1, 10]);
console.log(answer);
