/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Merge Sort
var sortArray = function (nums) {
  const half = nums.length / 2;
  // Base case
  if (nums.length < 2) {
    return nums;
  }
  const left = nums.splice(0, half);
  //   console.log(left);
  //   console.log(nums);
  return merge(sortArray(left), sortArray(nums));
};

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

let answer = sortArray([5, 2, 3, 1]);
console.log(answer);
