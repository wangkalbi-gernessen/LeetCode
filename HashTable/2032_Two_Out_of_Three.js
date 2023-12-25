/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let set1 = new Set([...nums1]);
  let set2 = new Set([...nums2]);
  let set3 = new Set([...nums3]);
  let map = new Map();
  for (let num of set1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let num of set2) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (let num of set3) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  //   console.log(map);
  let res = [];
  for (let [key, value] of map) {
    if (value === 2 || value === 3) {
      res.push(key);
    }
  }
  return res;
};

// let answer = twoOutOfThree([1, 1, 3, 2], [2, 3], [3]);
let answer = twoOutOfThree([3, 1], [2, 3], [1, 2]);
console.log(answer);
