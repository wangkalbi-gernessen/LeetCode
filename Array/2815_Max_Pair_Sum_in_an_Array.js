/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let max = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let firstMax = Math.max(...nums[i].toString().split(""));
      let secondMax = Math.max(...nums[j].toString().split(""));
      if (firstMax === secondMax) {
        max = max < nums[i] + nums[j] ? nums[i] + nums[j] : max;
      }
    }
  }
  return max;
};

// let answer = maxSum([51, 71, 17, 24, 42]);
let answer = maxSum([31, 25, 72, 79, 74]);
console.log(answer);
