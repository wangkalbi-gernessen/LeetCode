/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let res = Array(2);
  let included1 = 0;
  for (let value of nums1) {
    if (nums2.includes(value)) {
      included1++;
    }
  }
  res[0] = included1;

  let included2 = 0;
  for (let value of nums2) {
    if (nums1.includes(value)) {
      included2++;
    }
  }
  res[1] = included2;

  return res;
};

let answer = findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]);
console.log(answer);
