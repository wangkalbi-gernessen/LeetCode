/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let collections = new Set();
  let res = 0;
  let n = nums.length - 1;
  while (n >= 0) {
    res++;
    let lastElement = nums[n];
    if (lastElement <= k) {
      collections.add(lastElement);
    }

    if (collections.size === k) {
      break;
    }

    n--;
  }
  return res;
};

// let answer = minOperations([3, 1, 5, 4, 2], 5);
let answer = minOperations([3, 1, 5, 4, 2], 2);
// let answer = minOperations([3, 2, 5, 3, 1], 3);
// let answer = minOperations([1, 2, 2], 2);
console.log(answer);
