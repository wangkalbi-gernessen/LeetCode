/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let digitSums = [];
  for (let num of nums) {
    let digitSum = num
      .toString()
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr), 0);
    digitSums.push(digitSum);
  }
  return Math.min(...digitSums);
};

const nums = [10, 12, 13, 14];
console.log(minElement(nums));
