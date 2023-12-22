/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }
    }
  }

  if (map.size === 0) {
    return -1;
  }

  let largest = Math.max(...map.values());
  //   console.log(largest);
  let arr = [];
  for (let [key, value] of map.entries()) {
    if (value === largest) {
      arr.push(key);
    }
  }
  return arr.sort((a, b) => a - b)[0];
};

// let answer = mostFrequentEven([0, 1, 2, 2, 4, 4, 1]);
let answer = mostFrequentEven([4, 4, 4, 9, 2, 4]);
// let answer = mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]);
console.log(answer);
