/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let nums1 = nums;
  let nums2 = nums1;
  //   console.log(nums1);
  //   console.log(nums2);
  let concatenatedArray = nums1.concat(nums2);
  return concatenatedArray;
};

let answer = getConcatenation([1, 2, 1]);
console.log(answer);
