/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let ans = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let ele = new Set();
      for (let k = i; k <= j; k++) {
        ele.add(nums[k]);
      }
      sum += Math.pow(ele.size, 2);
    }
  }
  return sum;
};

let answer = sumCounts([1, 2, 1]);
console.log(answer);
