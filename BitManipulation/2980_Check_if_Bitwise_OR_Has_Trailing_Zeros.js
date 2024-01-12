/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let bitwiseOr = nums[i] | nums[j];
      let binaryString = bitwiseOr.toString(2);
      if (binaryString.endsWith("0") === true) {
        return true;
      }
    }
  }
  return false;
};

// let answer = hasTrailingZeros([2, 4, 8, 16]);
// let answer = hasTrailingZeros([1, 3, 5, 7, 9]);
let answer = hasTrailingZeros([4, 8]);
console.log(answer);
