/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = nums.reduce((currentSum, num) => currentSum + num, 0);
  //   console.log(elementSum);
  let digitSum = nums
    .join("")
    .split("")
    .reduce((currentSum, num) => currentSum + parseInt(num), 0);
  //   console.log(digitSum);
  return Math.abs(elementSum - digitSum);
};

let answer = differenceOfSum([1, 15, 6, 3]);
console.log(answer);
