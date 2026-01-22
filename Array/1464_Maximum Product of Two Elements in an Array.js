/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let product = (nums[i] - 1) * (nums[j] - 1);
      if (max < product) {
        max = product;
      }
    }
  }
  return max;
};

const nums = [3, 4, 5, 2];
console.log(maxProduct(nums));
