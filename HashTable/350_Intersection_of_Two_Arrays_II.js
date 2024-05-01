/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let hashmap = new Map();
  for (let num of nums1) {
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      hashmap.set(num, hashmap.get(num) + 1);
    }
  }

  let res = [];
  for (let num of nums2) {
    if (hashmap.has(num) && hashmap.get(num) > 0) {
      res.push(num);
      hashmap.set(num, hashmap.get(num) - 1);
    }
  }
  return res;
};

let answer = intersect([1, 2, 2, 1], [2, 2]);
console.log(answer);
