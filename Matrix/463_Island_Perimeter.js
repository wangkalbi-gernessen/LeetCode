/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeters = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeters += 4;
        // left cell next to this cell
        if (grid[i][j - 1] === 1) {
          perimeters--;
        }
        // right cell next to this cell
        if (grid[i][j + 1] === 1) {
          perimeters--;
        }
        // up cell next to this cell
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeters--;
        }
        // down cell next to this cell
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          perimeters--;
        }
      }
    }
  }
  return perimeters;
};

let answer = islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
console.log(answer);
