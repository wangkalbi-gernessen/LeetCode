/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!hashmap.has(nums[i])) {
      hashmap.set(nums[i], 1);
    } else {
      hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
    }
  }
  //   console.log(hashmap);
  let res = [];
  for (let [key, value] of hashmap) {
    if (value === 1) {
      res.push(key);
    }
  }
  return res;
};

let answer = singleNumber([1, 2, 1, 3, 2, 5]);
console.log(answer);
