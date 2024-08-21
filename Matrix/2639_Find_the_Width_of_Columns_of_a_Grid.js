/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  let ans = [];
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < n; i++) {
    let j = 0;
    let max = 0;
    while (j < m) {
      let columnNum = grid[j][i];
      let columnLength = columnNum.toString().length;
      if (max < columnLength) {
        max = columnLength;
      }
      j++;
    }
    ans.push(max);
  }
  return ans;
};

let answer = findColumnWidth([[1], [22], [333]]);
// let answer = findColumnWidth([
//   [-15, 1, 3],
//   [15, 7, 12],
//   [5, 6, -2],
// ]);
console.log(answer);
