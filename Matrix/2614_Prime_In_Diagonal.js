/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i][i]) === true && nums[i][i] > largest) {
      largest = nums[i][i];
    }
    if (
      isPrime(nums[i][nums.length - i - 1]) === true &&
      nums[i][nums.length - i - 1] > largest
    ) {
      largest = nums[i][nums.length - i - 1];
    }
  }

  return largest;
};

var isPrime = function (n) {
  //   if (n <= 1) {
  //     return false;
  //   }
  //   for (let i = 2; i < n; i++) {
  //     if (n % i === 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// let answer = diagonalPrime([
//   [1, 2, 3],
//   [5, 6, 7],
//   [9, 10, 11],
// ]);
let answer = diagonalPrime([
  [788, 645, 309, 559],
  [624, 160, 435, 724],
  [770, 483, 95, 695],
  [510, 779, 984, 238],
]);
console.log(answer);
