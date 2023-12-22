/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let minInRow = Math.min(...matrix[i]);
    let columnIndex = matrix[i].indexOf(minInRow);

    let j = 0;
    let rowLength = matrix.length;
    let maxInColumn = minInRow;
    let greaterCount = 0;
    while (j < rowLength) {
      if (maxInColumn > matrix[j][columnIndex]) {
        greaterCount++;
      }
      j++;
    }

    if (greaterCount === rowLength - 1) {
      res.push(maxInColumn);
    }
  }
  return res;
};

let answer = luckyNumbers([
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
]);
// let answer = luckyNumbers([
//   [1, 10, 4, 2],
//   [9, 3, 8, 7],
//   [15, 16, 17, 12],
// ]);
console.log(answer);
