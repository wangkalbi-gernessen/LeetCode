/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!hashmap.has(nums[i])) {
      hashmap.set(nums[i], 1);
    } else {
      hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
    }
  }
  //   console.log(hashmap);
  let max = Math.max(...hashmap.values());
  //   console.log(max);
  let res = 0;
  for (let [key, value] of hashmap) {
    if (value === max) {
      res += max;
    }
  }
  return res;
};

let answer = maxFrequencyElements([1, 2, 2, 3, 1, 4]);
console.log(answer);
