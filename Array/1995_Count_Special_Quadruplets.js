/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let q = k + 1; q < nums.length; q++) {
          if (i < j < k < q && nums[i] + nums[j] + nums[k] === nums[q]) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

// let answer = countQuadruplets([1, 2, 3, 6]);
let answer = countQuadruplets([1, 1, 1, 3, 5]);
console.log(answer);
