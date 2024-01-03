/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  let arr = [];
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (i < j && j < k && nums[i] < nums[j] && nums[j] > nums[k]) {
          arr.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }
  return arr.length !== 0 ? Math.min(...arr) : -1;
};

// let answer = minimumSum([8, 6, 1, 5, 3]);
let answer = minimumSum([6, 5, 4, 3, 4, 5]);
console.log(answer);
