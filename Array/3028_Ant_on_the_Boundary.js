/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let res = 0;
  let currentPosition = 0;
  for (let num of nums) {
    currentPosition += num;
    if (currentPosition === 0) {
      res++;
    }
  }
  return res;
};

let answer = returnToBoundaryCount([2, 3, -5]);
console.log(answer);
