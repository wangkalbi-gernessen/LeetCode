/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let max = 0;
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (i < j && j < k) {
          max =
            max < (nums[i] - nums[j]) * nums[k]
              ? (nums[i] - nums[j]) * nums[k]
              : max;
        }
      }
    }
  }
  return max;
};

// let answer = maximumTripletValue([12, 6, 1, 2, 7]);
let answer = maximumTripletValue([1, 2, 3]);
console.log(answer);
