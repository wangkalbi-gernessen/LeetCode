/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let set = new Set(nums);
  console.log(set);
  let sorted = [...set].sort((a, b) => b - a);
  //   console.log(sorted);
  return sorted.length >= 3 ? sorted[2] : sorted[0];
};

// let answer = thirdMax([3, 2, 1]);
// let answer = thirdMax([1, 2]);
// let answer = thirdMax([2, 2, 3, 1]);
let answer = thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]);
console.log(answer);
