/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  let sum = 0;
  let newNums = [...nums];
  let n = nums.length;
  //   console.log(newNums);
  while (n > 1) {
    let replaced = [];
    for (let i = 0; i < newNums.length - 1; i++) {
      replaced.push((newNums[i] + newNums[i + 1]) % 10);
    }
    newNums = [...replaced];
    n--;
  }
  //   console.log(newNums);
  return newNums[0];
};

// let answer = triangularSum([1, 2, 3, 4, 5]);
let answer = triangularSum([4, 1, 6, 8, 3, 2]);
// let answer = triangularSum([5]);
console.log(answer);
