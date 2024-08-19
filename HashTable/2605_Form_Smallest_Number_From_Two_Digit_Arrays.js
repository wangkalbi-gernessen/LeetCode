/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  let smallest = Number.MAX_VALUE;
  let set = new Set(nums1);
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      if (smallest > nums2[i]) smallest = nums2[i];
    }
  }

  if (smallest === Number.MAX_VALUE) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let smallOne = Number(nums1[0].toString() + nums2[0].toString());
    let smallTwo = Number(nums2[0].toString() + nums1[0].toString());
    smallest = smallOne >= smallTwo ? smallTwo : smallOne;
  }

  return smallest;
};

let answer = minNumber([4, 1, 3], [5, 7]);
console.log(answer);
