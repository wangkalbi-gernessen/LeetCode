/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  let evens = nums
    .filter((value, index) => index % 2 === 0)
    .sort((a, b) => a - b);
  let odds = nums
    .filter((value, index) => index % 2 !== 0)
    .sort((a, b) => b - a);
  //   console.log(evens);
  //   console.log(odds);
  let output = [];
  let index = 0;
  while (evens.length > 0 || odds.length > 0) {
    if (index % 2 === 0) {
      output[index] = evens.shift();
    } else {
      output[index] = odds.shift();
    }
    index++;
  }
  return output;
};

// let answer = sortEvenOdd([4, 1, 2, 3]);
let answer = sortEvenOdd([2, 1]);
console.log(answer);
