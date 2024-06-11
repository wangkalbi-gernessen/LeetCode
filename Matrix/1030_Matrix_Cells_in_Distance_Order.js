/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let cells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push([i, j]);
    }
  }
  //   console.log(cells);
  let cellWithDifferences = [];
  for (let i = 0; i < cells.length; i++) {
    let totalDistance = 0;
    let rowDistance = Math.abs(cells[i][0] - rCenter);
    let colDistance = Math.abs(cells[i][1] - cCenter);

    totalDistance += rowDistance + colDistance;

    cellWithDifferences.push([cells[i], totalDistance]);
  }

  //   console.log(cellWithDifferences);

  let sorted = cellWithDifferences.sort((a, b) => a[1] - b[1]);
  let mapped = cellWithDifferences.map((item) => item[0]);
  return mapped;
};

let answer = allCellsDistOrder(1, 2, 0, 0);
console.log(answer);
