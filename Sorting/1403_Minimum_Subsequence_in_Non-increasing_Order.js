/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let res = [];
  let sum = 0;
  let total = nums.reduce((accumlator, curr) => accumlator + curr, 0);
  for (let num of nums) {
    if (sum <= total) {
      res.push(num);
      sum += num;
      total -= num;
    } else {
      break;
    }
  }
  return res;
};

let answer = minSubsequence([4, 3, 10, 9, 8]);
console.log(answer);
