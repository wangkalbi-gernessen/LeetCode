/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let numOfEvenDigits = 0;
  for (let num of nums) {
    let digits = num.toString().length;
    if (digits % 2 === 0) {
      numOfEvenDigits++;
    }
  }

  return numOfEvenDigits;
};

const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));
