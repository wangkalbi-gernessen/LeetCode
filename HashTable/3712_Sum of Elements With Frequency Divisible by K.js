/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function (nums, k) {
  const hashmap = new Map();
  for (let num of nums) {
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }

  // console.log(hashmap);
  let sum = 0;
  for (let [key, value] of hashmap) {
    // console.log(key, value);
    if (value % k === 0) {
      sum += key * value;
    }
  }
  return sum;
};

const nums = [1, 2, 2, 3, 3, 3, 3, 4];
const k = 2;
console.log(sumDivisibleByK(nums, k));
