/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function (nums, k) {
  const sortedNums = nums.sort((a, b) => b - a);
  const largestNums = sortedNums.slice(0, k);
  const smallestNums = sortedNums.slice(-k);
  // console.log(smallestNums);
  const sumOfLargestNums = largestNums.reduce((acc, curr) => acc + curr, 0);
  const sumOfSmallestNums = smallestNums.reduce((acc, curr) => acc + curr, 0);

  return Math.abs(sumOfLargestNums - sumOfSmallestNums);
};

const nums = [5, 2, 2, 4];
const k = 2;
console.log(absDifference(nums, k));
