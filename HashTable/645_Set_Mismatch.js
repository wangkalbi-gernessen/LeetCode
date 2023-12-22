/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let length = nums.length;
  let i = 1;
  let map = new Map();
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  //   console.log(map);

  for (let [key, value] of map) {
    if (value >= 2) {
      output.push(key);
    }
  }
  //   console.log(output);

  while (i <= length) {
    if (!map.has(i)) {
      output.push(i);
    }
    i++;
  }
  return output;
};

// let answer = findErrorNums([1, 2, 2, 4]);
// let answer = findErrorNums([1, 1]);
let answer = findErrorNums([1, 2, 3, 4, 4, 6]);
// let answer = findErrorNums([2, 2]);
console.log(answer);
