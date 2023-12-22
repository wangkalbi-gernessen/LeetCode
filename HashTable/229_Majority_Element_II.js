/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  //   console.log(map);
  let res = [];
  for (let [key, value] of map) {
    if (value > nums.length / 3) {
      res.push(key);
    }
  }
  return res;
};

// let answer = majorityElement([3, 2, 3]);
// let answer = majorityElement([1]);
let answer = majorityElement([1, 2]);
console.log(answer);
