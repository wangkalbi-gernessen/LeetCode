/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
  const sum = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const minOperation = sum % k;

  return minOperation;
};

const nums = [3, 9, 7];
const k = 5;
console.log(minOperations(nums, k));
