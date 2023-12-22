/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  let sorted = nums.sort((a, b) => b - a);
  //   console.log(sorted);
  let maxi = 0;
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] < sorted[i + 1] + sorted[i + 2]) {
      maxi = Math.max(maxi, sorted[i] + sorted[i + 1] + sorted[i + 2]);
    }
  }
  return maxi;
};

let answer = largestPerimeter([2, 1, 2]);
// let answer = largestPerimeter([1, 2, 1, 10]);
console.log(answer);
