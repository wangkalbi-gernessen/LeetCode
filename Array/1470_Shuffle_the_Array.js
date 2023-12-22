/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let allNums = nums;
  let nums1 = allNums.splice(0, n);
  let nums2 = allNums;
  let output = [];
  let index = 0;
  while (index < n) {
    output.push(nums1[index]);
    output.push(nums2[index]);
    index++;
  }
  return output;
};

// let answer = shuffle([2, 5, 1, 3, 4, 7], 3);
// let answer = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
let answer = shuffle([1, 1, 2, 2], 2);
console.log(answer);
