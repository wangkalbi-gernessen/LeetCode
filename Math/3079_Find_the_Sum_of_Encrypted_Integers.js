/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let digits = nums[i].toString().split("");
    let max = Math.max(...digits);
    console.log(typeof max);
    digits = digits.map((num) => (num !== max ? max : num)).join("");
    sum += parseInt(digits);
  }
  return sum;
};

let answer = sumOfEncryptedInt([10, 21, 31]);
console.log(answer);
