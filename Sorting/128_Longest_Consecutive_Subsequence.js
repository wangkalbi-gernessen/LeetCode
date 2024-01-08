/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  let ele = [];
  //   console.log(nums);
  let maxConsecutive = 0;
  let currentConsecutive = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      ele.push(nums[i]);
    } else if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      ele.push(nums[i]);
      res.push(ele);
      ele = [];
    }
  }

  let max = 0;
  for (let j = 0; j < res.length; j++) {
    if (max < res[j].length) {
      max = res[j].length;
    }
  }
  return max;
};

// let answer = longestConsecutive([100, 4, 200, 1, 3, 2]);
let answer = longestConsecutive([1, 2, 0, 1]);
console.log(answer);
