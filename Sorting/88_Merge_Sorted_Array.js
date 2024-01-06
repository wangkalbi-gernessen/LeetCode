/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m;
  let j = 0;
  while (j < n) {
    nums1[i] = nums2[j];
    i++;
    j++;
  }
  return nums1.sort((a, b) => a - b);
};

let answer = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// let answer = merge([1], 1, [], 0);
// let answer = merge([0], 0, [1], 1);
console.log(answer);
