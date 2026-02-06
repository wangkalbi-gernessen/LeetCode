/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    const sumOfDigits = nums[i]
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);

    if (sumOfDigits === i) {
      indices.push(i);
    }
  }

  return indices.length === 0 ? -1 : Math.min(...indices);
};

const nums = [1, 10, 11];
console.log(smallestIndex(nums));
