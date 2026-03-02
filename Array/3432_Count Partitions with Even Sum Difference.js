/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  let countOfEven = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let leftSubarraySum = nums
      .slice(0, i + 1)
      .reduce((acc, curr) => acc + curr, 0);
    let rightSubarraySum = nums
      .slice(i + 1)
      .reduce((acc, curr) => acc + curr, 0);

    if ((leftSubarraySum - rightSubarraySum) % 2 === 0) {
      countOfEven++;
    }
  }

  return countOfEven;
};

const nums = [10, 10, 3, 7, 6];
console.log(countPartitions(nums));
