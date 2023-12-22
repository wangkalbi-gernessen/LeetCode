/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  let sumSets = new Set();
  let sum;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let pair = [];
      for (let k = i; k <= j; k++) {
        pair.push(nums[k]);
      }
      if (pair.length === 2) {
        sum = pair.reduce((a, b) => a + b);
        if (!sumSets.has(sum)) {
          sumSets.add(sum);
        } else {
          return true;
        }
      }
    }
  }
  return false;
};

let answer = findSubarrays([4, 2, 4]);
console.log(answer);
