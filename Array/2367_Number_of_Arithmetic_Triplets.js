/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
        count++;
        j++;
      } else if (nums[j] - nums[i] === diff && nums[k] - nums[j] > diff) {
        k--;
      } else {
        j++;
      }
    }
  }
  return count;
};

let answer = arithmeticTriplets([0, 1, 4, 6, 7, 10], 3);
console.log(answer);
