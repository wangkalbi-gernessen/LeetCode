/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let hashmap = new Map();
  for (let num of nums) {
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      hashmap.set(num, hashmap.get(num) + 1);
    }
  }

  let sum = 0;
  for (let key of hashmap.keys()) {
    if (hashmap.get(key) === 1) {
      sum += key;
    }
  }
  return sum;
};

const nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums));
