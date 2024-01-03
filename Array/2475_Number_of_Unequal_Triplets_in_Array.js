/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let res = 0;
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          res++;
        }
      }
    }
  }
  return res;
};

let answer = unequalTriplets([4, 4, 2, 4, 3]);
console.log(answer);
