/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let res = matrix;
  let maxes = [];

  // Decide max value in each column
  let i = 0;
  while (i < n) {
    let j = 0;
    let max = 0;
    while (j < m) {
      if (max < matrix[j][i]) {
        max = matrix[j][i];
      }
      j++;
    }
    maxes.push(max);
    i++;
  }
  //   console.log(maxes);

  // Replace elements with -1 with max value in each column
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        res[i][j] = maxes[j];
      }
    }
  }
  return res;
};

let answer = modifiedMatrix([
  [3, -1],
  [5, 2],
]);
// let answer = modifiedMatrix([
//   [1, 2, -1],
//   [4, -1, 6],
//   [7, 8, 9],
// ]);
console.log(answer);
