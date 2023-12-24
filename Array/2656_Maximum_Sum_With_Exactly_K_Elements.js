/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let res = 0;
  let i = 1;
  while (i <= k) {
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    nums.splice(index, 1);
    nums.push(max + 1);
    res += max;
    i++;
  }
  return res;
};

let answer = maximizeSum([1, 2, 3, 4, 5], 3);
console.log(answer);
