/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let n = nums.length;
  let res = new Array(2 ** nums.length).fill(0).map(() => new Array());
  //   console.log(res);
  for (let i = 0; i < res.length; i++) {
    let ele = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        ele.push(nums[j]);
      }
    }
    // console.log(ele);
    res[i] = ele;
  }
  //   console.log(res);
  return res;
};

let answer = subsets([1, 2, 3]);
console.log(answer);
