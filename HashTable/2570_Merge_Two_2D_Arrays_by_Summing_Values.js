/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let nums3 = nums1.concat(nums2);
  let hashmap = new Map();
  for (let i = 0; i < nums3.length; i++) {
    if (!hashmap.has(nums3[i][0])) {
      hashmap.set(nums3[i][0], nums3[i][1]);
    } else {
      hashmap.set(nums3[i][0], hashmap.get(nums3[i][0]) + nums3[i][1]);
    }
  }

  let res = [];
  for (let [key, value] of hashmap) {
    res.push([key, value]);
  }

  let sortedByKey = res.sort((a, b) => a[0] - b[0]);
  return sortedByKey;
};

let answer = mergeArrays(
  [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ]
);
console.log(answer);
