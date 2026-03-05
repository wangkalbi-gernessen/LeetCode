/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hashmap = new Map();
  for (let num of nums) {
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }

  for (let [key, value] of hashmap) {
    if (value === 1) {
      return key;
    }
  }
};

const nums = [2, 2, 1];
console.log(singleNumber(nums));
