/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let negatives = grid[i].filter((num) => {
      if (num < 0) {
        return true;
      }
    });

    count += negatives.length;
  }
  return count;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid));
