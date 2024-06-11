/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let totalArea = 0;
  let n = grid.length;
  //xy plane
  for (let i = 0; i < grid.length; i++) {
    totalArea += grid[i].filter((cube) => cube !== 0).length;
  }
  //   console.log(totalArea);

  //xz plane
  for (let i = 0; i < grid.length; i++) {
    totalArea += Math.max(...grid[i]);
  }

  //yz plane
  for (let j = 0; j < n; j++) {
    let max = 0;
    for (let k = 0; k < n; k++) {
      if (max < grid[k][j]) {
        max = grid[k][j];
      }
    }
    totalArea += max;
  }

  return totalArea;
};

let answer = projectionArea([
  [1, 2],
  [3, 4],
]);
// let answer = projectionArea([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]);
console.log(answer);
