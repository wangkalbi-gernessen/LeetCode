/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let n = nums.length;
  let res = -1;
  while (n >= 0) {
    let filtered = nums.filter((num) => num >= n);
    if (filtered.length === n) {
      return n;
    }
    n--;
  }
  return res;
};

// let answer = specialArray([3, 5]);
let answer = specialArray([0, 0]);
console.log(answer);
