/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let sorted = points.sort((a, b) => a[0] - b[0]);
  let maxWidth = 0;
  for (let i = 1; i < sorted.length; i++) {
    let distance = Math.abs(sorted[i - 1][0] - sorted[i][0]);
    maxWidth = Math.max(maxWidth, distance);
  }
  return maxWidth;
};

let answer = maxWidthOfVerticalArea([
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]);
console.log(answer);
