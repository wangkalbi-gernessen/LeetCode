/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  let sum = 0;
  let n = nums1.length;
  let m = nums2.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) {
        sum++;
      }
    }
  }
  return sum;
};

let answer = numberOfPairs([1, 3, 4], [1, 3, 4], 1);
console.log(answer);
