/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let minSeconds = 0;
  for (let i = 1; i < points.length; i++) {
    let x = Math.abs(points[i][0] - points[i - 1][0]);
    let y = Math.abs(points[i][1] - points[i - 1][1]);

    if (x === y) {
      minSeconds += x;
    } else {
      let min = Math.min(x, y);
      let max = Math.max(x, y);
      minSeconds += min;
      let d = max - min;
      minSeconds += d;
    }
  }
  return minSeconds;
};

let answer = minTimeToVisitAllPoints([
  [1, 1],
  [3, 4],
  [-1, 0],
]);
console.log(answer);
