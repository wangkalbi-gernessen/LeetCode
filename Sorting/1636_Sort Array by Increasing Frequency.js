/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const hashmap = new Map();
  for (let num of nums) {
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      hashmap.set(num, hashmap.get(num) + 1);
    }
  }

  const sortedHashmap = Array.from(hashmap);
  sortedHashmap.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  // console.log(sortedHashmap);

  let res = [];
  for (let i = 0; i < sortedHashmap.length; i++) {
    for (let j = 0; j < sortedHashmap[i][1]; j++) {
      res.push(sortedHashmap[i][0]);
    }
  }
  // console.log(res);
  return res;
};

const nums = [2, 3, 1, 3, 2];
console.log(frequencySort(nums));
