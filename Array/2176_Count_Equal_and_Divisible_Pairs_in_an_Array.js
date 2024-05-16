/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let pairs = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        pairs++;
      }
    }
  }
  return pairs;
};

let answer = countPairs([3, 1, 2, 2, 2, 1, 3], 2);
console.log(answer);
