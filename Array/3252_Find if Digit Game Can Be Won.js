/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let singleDigitsSum = nums
    .filter((num) => num < 10)
    .reduce((acc, current) => acc + current, 0);

  let doubleDigitsSum = nums
    .filter((num) => num >= 10)
    .reduce((acc, current) => acc + current, 0);

  return singleDigitsSum > doubleDigitsSum || singleDigitsSum < doubleDigitsSum;
};

const nums = [1, 2, 3, 4, 10];
console.log(canAliceWin(nums));
