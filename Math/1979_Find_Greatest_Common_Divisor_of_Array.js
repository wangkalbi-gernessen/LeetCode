/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let smallest = nums[0];
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    smallest = Math.min(nums[i], smallest);
    largest = Math.max(nums[i], largest);
  }
  console.log(smallest);
  console.log(largest);

  let result = gcd(smallest, largest);
  if (result === 1) {
    return 1;
  }

  return result;
};

var gcd = function (a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
};

// let answer = findGCD([2, 5, 6, 9, 10]);
let answer = findGCD([7, 5, 6, 8, 3]);
// let answer = findGCD([3, 3]);
console.log(answer);
