/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();
  // set1
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) === false) {
      set1.add(nums1[i]);
    }
  }

  //set2
  for (let j = 0; j < nums2.length; j++) {
    if (nums1.includes(nums2[j]) === false) {
      set2.add(nums2[j]);
    }
  }
  let res = [[...set1], [...set2]];
  return res;
};

let answer = findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
console.log(answer);
