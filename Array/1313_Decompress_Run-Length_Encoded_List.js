/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i += 2) {
    let newArray = Array(nums[i]).fill(nums[i + 1]);
    res = res.concat(newArray);
  }
  return res;
};

let answer = decompressRLElist([1, 2, 3, 4]);
console.log(answer);
