/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === j) {
        if (grid[i][j] === 0) {
          return false;
        }
      } else if (i + j === grid.length - 1) {
        if (grid[i][j] === 0) {
          return false;
        }
      } else {
        if (grid[i][j] !== 0) {
          return false;
        }
      }
    }
  }
  return true;
};

// let answer = checkXMatrix([
//   [2, 0, 0, 1],
//   [0, 3, 1, 0],
//   [0, 5, 2, 0],
//   [4, 0, 0, 2],
// ]);
// let answer = checkXMatrix([
//   [5, 7, 0],
//   [0, 3, 1],
//   [0, 5, 0],
// ]);
let answer = checkXMatrix([
  [2, 0, 0, 0, 0],
  [0, 4, 0, 1, 0],
  [0, 0, 5, 0, 0],
  [0, 5, 0, 2, 0],
  [4, 0, 0, 0, 2],
]);
console.log(answer);
