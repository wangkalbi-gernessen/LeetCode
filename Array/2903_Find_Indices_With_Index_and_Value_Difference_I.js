/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (
        Math.abs(i - j) >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
};

let answer = findIndices([5, 1, 4, 1], 2, 4);
console.log(answer);
