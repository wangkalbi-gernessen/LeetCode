/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let usedNumsForLoop = nums1.length > nums2.length ? nums2 : nums1;
  let notUsedNumsForLoop = nums1.length > nums2.length ? nums1 : nums2;

  let sets = new Set();
  for (let num of usedNumsForLoop) {
    if (notUsedNumsForLoop.includes(num)) {
      sets.add(num);
    }
  }

  let res = Array.from(sets);
  console.log(res);
  return res;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2));
