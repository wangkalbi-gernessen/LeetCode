/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      arr1.push(nums[i]);
    }
    if (i === 1) {
      arr2.push(nums[i]);
    }
    if (i >= 2) {
      if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
        arr1.push(nums[i]);
      } else {
        arr2.push(nums[i]);
      }
    }
  }

  let result = arr1.concat(arr2);
  return result;
};

let answer = resultArray([2, 1, 3]);
console.log(answer);
