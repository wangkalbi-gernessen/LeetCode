/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let minus = [];
  for (let i = 0; i < nums.length; i++) {
    if (Math.sign(nums[i]) === -1) {
      minus.push(nums[i]);
    }
  }
  console.log(minus);
  let largest = -1;
  for (let i = 0; i < minus.length; i++) {
    if (nums.indexOf(-minus[i]) !== -1) {
      largest = largest < -minus[i] ? -minus[i] : largest;
    }
  }
  return largest;
};

let answer = findMaxK([-1, 10, 6, 7, -7, 1]);
console.log(answer);
