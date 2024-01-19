/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let max = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i < j && nums[i] < nums[j]) {
        let difference = nums[j] - nums[i];

        max = max < difference ? difference : max;
      }
    }
  }
  return max;
};

let answer = maximumDifference([9, 4, 3, 2]);
console.log(answer);
