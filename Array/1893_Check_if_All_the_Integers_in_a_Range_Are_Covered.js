/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  let count = 0;
  let j = left;
  while (j <= right) {
    for (let i = 0; i < ranges.length; i++) {
      if (ranges[i][0] <= j && ranges[i][1] >= j) {
        count++;
        break;
      }
    }
    j++;
  }
  //   console.log(count);
  return count === right - left + 1 ? true : false;
};

let answer = isCovered([[1, 1]], 1, 50);
// let answer = isCovered(
//   [
//     [1, 10],
//     [10, 20],
//   ],
//   21,
//   21
// );
// let answer = isCovered(
//   [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ],
//   2,
//   5
// );
console.log(answer);
