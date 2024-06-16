/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;

  let times = 0;
  while (times < k) {
    let temp = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === m - 1 && j === n - 1) {
          temp[0][0] = grid[i][j];
        } else if (j === n - 1) {
          temp[i + 1][0] = grid[i][j];
        } else {
          temp[i][j + 1] = grid[i][j];
        }
      }
    }
    grid = temp;
    times++;
  }
  return grid;
};

let answer = shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1
);
console.log(answer);
