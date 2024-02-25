/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let bits = i
      .toString(2)
      .split("")
      .reduce((total, current) => (current === "1" ? total + 1 : total), 0);
    if (bits === k) {
      sum += nums[i];
    }
  }
  return sum;
};

let answer = sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1);
console.log(answer);
