/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
  let min = -1;
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      min = i;
      break;
    }
  }
  return min;
};

let answer = smallestEqual([4, 3, 2, 1]);
console.log(answer);
