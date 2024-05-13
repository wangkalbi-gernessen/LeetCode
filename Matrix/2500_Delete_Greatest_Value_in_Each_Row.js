/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let n = grid[0].length;
  let sum = 0;

  while (n > 0) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
      let rowMax = Math.max(...grid[i]);

      if (rowMax > max) {
        max = rowMax;
      }

      let index = grid[i].indexOf(rowMax);
      grid[i].splice(index, 1);
    }
    sum += max;
    n--;
  }
  return sum;
};

let answer = deleteGreatestValue([
  [1, 2, 4],
  [3, 3, 1],
]);
console.log(answer);
