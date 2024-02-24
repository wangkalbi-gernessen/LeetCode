/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  let res = [];
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
    let subset = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      subset.add(nums[j]);
    }

    res.push(set.size - subset.size);
  }
  return res;
};

let answer = distinctDifferenceArray([3, 2, 3, 4, 2]);
console.log(answer);
