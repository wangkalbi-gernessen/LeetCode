/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(i - map.get(nums[i])) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

// let answer = containsNearbyDuplicate([1, 2, 3, 1], 3);
// let answer = containsNearbyDuplicate([1, 0, 1, 1], 1);
let answer = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
console.log(answer);
