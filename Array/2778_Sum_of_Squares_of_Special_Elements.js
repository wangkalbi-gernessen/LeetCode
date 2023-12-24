/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  let sum = 0;
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let index = i + 1;
    if (n % index === 0) {
      sum += Math.pow(nums[i], 2);
    }
  }
  return sum;
};

let answer = sumOfSquares([1, 2, 3, 4]);
console.log(answer);
