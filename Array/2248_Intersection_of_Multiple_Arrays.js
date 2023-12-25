/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (!map.has(nums[i][j])) {
        map.set(nums[i][j], 1);
      } else {
        map.set(nums[i][j], map.get(nums[i][j]) + 1);
      }
    }
  }
  console.log(map);
  let res = [];
  for (let [key, value] of map) {
    if (value === nums.length) {
      res.push(key);
    }
  }
  return res.sort((a, b) => a - b);
};

let answer = intersection([
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6],
]);
console.log(answer);
