/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  let first = nums.shift();
  //   console.log(first);
  nums.sort((a, b) => a - b);
  return first + nums[0] + nums[1];
};

let answer = minimumCost([10, 3, 1, 1]);
console.log(answer);
