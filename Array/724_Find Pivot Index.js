/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const leftSum = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    const rightSum = nums.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
