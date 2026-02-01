/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  let sum = 0;
  for (let num of nums) {
    let arrOfNum = num.toString().split("");
    const length = arrOfNum.length;
    const max = Math.max(...arrOfNum);
    const encryptedArr = Array(length).fill(max);
    sum += parseInt(encryptedArr.join(""));
  }
  return sum;
};

const nums = [10, 21, 31];
console.log(sumOfEncryptedInt(nums));
