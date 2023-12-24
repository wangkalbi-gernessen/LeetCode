/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      set.delete(nums[i]);
    }
  }
  //   console.log(set);
  return set.size === 0;
};

let answer = divideArray([3, 2, 3, 2, 2, 2]);
console.log(answer);
