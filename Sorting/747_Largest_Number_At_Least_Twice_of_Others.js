/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let largest = Math.max(...nums);
  //   console.log(largest);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === largest) {
      continue;
    }

    if (largest < nums[i] * 2) {
      return -1;
    }
  }
  return nums.indexOf(largest);
};

// let answer = dominantIndex([3, 6, 1, 0]);
let answer = dominantIndex([1, 2, 3, 4]);
console.log(answer);
