/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      indices.push(i);
    }
  }
  //   console.log(indices);

  for (let j = 1; j < indices.length; j++) {
    if (indices[j] - indices[j - 1] <= k) {
      return false;
    }
  }
  return true;
};

let answer = kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2);
console.log(answer);
