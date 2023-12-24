/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  let map = new Map();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === key) {
      if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }
    }
  }
  //   console.log(map);
  let largest = [...map.values()].reduce(
    (accumlator, num) => (accumlator < num ? num : accumlator),
    0
  );
  //   console.log(largest);

  let res;
  for (let [key, value] of map) {
    if (value === largest) {
      res = key;
    }
  }
  return res;
};

// let answer = mostFrequent([1, 100, 200, 1, 100], 1);
let answer = mostFrequent([2, 2, 2, 2, 3], 2);
console.log(answer);
