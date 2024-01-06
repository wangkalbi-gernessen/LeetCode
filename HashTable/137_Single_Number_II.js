/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashmap = new Map();
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (!hashmap.has(nums[i])) {
      hashmap.set(nums[i], 1);
    } else {
      hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
    }
  }
  console.log(hashmap);
  let res;
  for (let [key, value] of hashmap) {
    if (value === 1) {
      res = key;
    }
  }
  return res;
};

let answer = singleNumber([0, 1, 0, 1, 0, 1, 99]);
console.log(answer);
