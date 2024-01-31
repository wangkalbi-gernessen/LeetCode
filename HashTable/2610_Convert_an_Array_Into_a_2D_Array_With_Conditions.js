/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let res = [];
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let index = hashmap.get(nums[i]) || 0;
    let sub = res[index] || [];
    // console.log(sub);

    sub.push(nums[i]);
    res[index] = sub;
    hashmap.set(nums[i], index + 1);
  }
  return res;
};

let answer = findMatrix([1, 3, 4, 1, 2, 3, 1]);
console.log(answer);
