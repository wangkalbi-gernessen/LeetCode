/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let map = new Map();
  for (let i = 0; i < divisors.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] === 0) {
        count++;
      }
    }
    map.set(divisors[i], count);
  }

  let arr = [...map].sort((a, b) => b[1] - a[1]).map((item) => item[1]);
  let largest = arr[0];
  //   console.log(largest);

  let largestValueArr = [];
  for (let [key, value] of map) {
    if (value === largest) {
      largestValueArr.push(key);
    }
  }
  return Math.min(...largestValueArr);
};

// let answer = maxDivScore([4, 7, 9, 3, 9], [5, 2, 3]);
// let answer = maxDivScore([20, 14, 21, 10], [5, 7, 5]);
let answer = maxDivScore([73, 13, 20, 6], [56, 75, 83, 26, 24, 53, 56, 61]);
console.log(answer);
