/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let matrix = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  //   console.log(matrix);
  for (let i = 0; i < indices.length; i++) {
    // Increment 1 to all the cells on row
    for (let r = 0; r < matrix[0].length; r++) {
      matrix[indices[i][0]][r] += 1;
    }

    // Increment 1 to all the cells on column
    for (let c = 0; c < matrix.length; c++) {
      matrix[c][indices[i][1]] += 1;
    }
  }
  //   console.log(matrix);

  let flatted = matrix.flat().filter((item) => item % 2 !== 0);
  return flatted.length;
};

let answer = oddCells(2, 3, [
  [0, 1],
  [1, 1],
]);
console.log(answer);
