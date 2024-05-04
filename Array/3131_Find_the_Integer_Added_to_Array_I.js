/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  let sum1 = nums1.reduce((accumlator, num) => accumlator + num, 0);
  let sum2 = nums2.reduce((accumlator, num) => accumlator + num, 0);

  let res = (sum2 - sum1) / nums1.length;
  return res;
};

let answer = addedInteger([2, 6, 4], [9, 7, 5]);
console.log(answer);
