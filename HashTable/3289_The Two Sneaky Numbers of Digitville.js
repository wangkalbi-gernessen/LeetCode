/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSneakyNumbers = function (nums) {
  const hashmap = new Map();
  for (let num of nums) {
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      hashmap.set(num, hashmap.get(num) + 1);
    }
  }

  const ans = [];
  for (const x of hashmap.keys()) {
    if (hashmap.get(x) > 1) {
      ans.push(x);
    }
  }
  return ans;
};

const nums = [0, 1, 1, 0];
console.log(getSneakyNumbers(nums));
