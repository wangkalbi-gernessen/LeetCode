/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  //   console.log(arr.length);
  let fivePercent = (arr.length * 5) / 100;
  //   console.log(fivePercent);
  arr.splice(0, fivePercent);
  arr.splice(-fivePercent);
  console.log(arr);
  let sum = arr.reduce((accumlator, num) => accumlator + num, 0);
  return Math.round((sum / arr.length) * 100000) / 100000;
};

// let answer = trimMean([
//   6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0,
// ]);
let answer = trimMean([
  6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3,
  8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4,
]);
console.log(answer);
