/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let set1 = new Set(nums1);
  //   console.log(set);
  let nums3 = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      nums3.push(nums2[i]);
    }
  }

  let sorted = nums3.sort((a, b) => a - b);
  console.log(sorted);
  let result = sorted.length === 0 ? -1 : sorted[0];
  return result;
};

// let answer = getCommon([1, 2, 3], [2, 4]);
let answer = getCommon([1, 2, 3, 6], [2, 3, 4, 5]);
console.log(answer);
