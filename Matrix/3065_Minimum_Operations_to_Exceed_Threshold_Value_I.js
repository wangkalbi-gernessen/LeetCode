/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let operations = 0;
  while (true) {
    let min = Math.min(...nums);

    if (min >= k) {
      break;
    } else {
      let index = nums.indexOf(min);
      nums.splice(index, 1);
      operations++;

      if (Math.min(...nums) >= k) {
        break;
      }
    }
  }
  return operations;
};

let answer = minOperations([2, 11, 10, 1, 3], 10);
console.log(answer);
