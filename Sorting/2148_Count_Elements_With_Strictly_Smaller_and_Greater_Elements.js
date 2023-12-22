/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);

  let filtered = nums.filter((item) => item !== max && item !== min);
  //   console.log(filtered);
  return filtered.length;
};

// let answer = countElements([11, 7, 2, 15]);
let answer = countElements([-3, 3, 3, 90]);
console.log(answer);
