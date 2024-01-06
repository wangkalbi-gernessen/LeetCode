/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      arr.push(nums[i]);
    } else {
      arr.push(nums[i]);
      res.push(arr);
      arr = [];
    }
  }
  //   console.log(arr);
  //   console.log(res);

  for (let j = 0; j < res.length; j++) {
    if (res[j].length > 1) {
      res[j] = `${res[j][0]}->${res[j][res[j].length - 1]}`;
    } else {
      res[j] = `${res[j][0]}`;
    }
  }
  return res;
};

// let answer = summaryRanges([0, 1, 2, 4, 5, 7]);
let answer = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
// let answer = summaryRanges([0, 9]);
console.log(answer);
