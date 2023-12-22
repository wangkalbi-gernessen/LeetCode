/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let sum = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (left === right) {
      sum += nums[left];
    } else {
      let concatenated = `${nums[left]}${nums[right]}`;
      sum += Number(concatenated);
    }
    left++;
    right--;
  }
  return sum;
};

let answer = findTheArrayConcVal([7, 52, 2, 4]);
// let answer = findTheArrayConcVal([5, 14, 13, 8, 12]);
// let answer = findTheArrayConcVal([1]);
console.log(answer);
