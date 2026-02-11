/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);
  const leftSortedNums = sortedNums.slice(0, 2);
  const rightSortedNums = sortedNums.slice(2);

  const a = leftSortedNums[0];
  const b = leftSortedNums[1];
  const c = Math.min(...rightSortedNums);

  return a + b - c;
};

const nums = [1, 4, 2, 5];
console.log(maximizeExpressionOfThree(nums));
