/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  let half = nums.length / 2;
  let hashmap = new Map();
  for (let num of nums) {
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      hashmap.set(num, hashmap.get(num) + 1);
    }
  }
  //   console.log(hashmap);
  let size1 = half;
  let size2 = half;
  for (let [key, value] of hashmap) {
    if (value > 2) {
      return false;
    } else if (value === 2) {
      size1--;
      size2--;
    } else if (value === 1) {
      if (size1 > size2) {
        size1--;
      } else {
        size2--;
      }
    }
  }
  //   console.log(size1);
  //   console.log(size2);

  if (size1 === 0 && size2 === 0) {
    return true;
  }
  return false;
};

// let answer = isPossibleToSplit([1, 1, 2, 2, 3, 4]);
// let answer = isPossibleToSplit([1, 1, 1, 1]);
let answer = isPossibleToSplit([2, 10, 2, 7, 8, 9, 7, 6, 6, 9]);
console.log(answer);
