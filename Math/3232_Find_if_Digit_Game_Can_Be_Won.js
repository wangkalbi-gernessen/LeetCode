/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let oneDigits = nums
    .filter((num) => num < 10)
    .reduce((total, currentValue) => total + currentValue, 0);
  let twoDigits = nums
    .filter((num) => num >= 10)
    .reduce((total, currentValue) => total + currentValue, 0);

  return oneDigits > twoDigits || twoDigits > oneDigits;
};

let answer = canAliceWin([1, 2, 3, 4, 10]);
console.log(answer);
