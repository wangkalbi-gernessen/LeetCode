/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  // output min and max value in both x.
  let xPoints = [];
  let yPoints = [];
  for (let i = 0; i < points.length; i++) {
    xPoints.push(points[i][0]);
    yPoints.push(points[i][1]);
  }
  //   console.log(xPoints);
  //   console.log(yPoints);
  let xMax = Math.max(...xPoints);
  let xMin = Math.min(...xPoints);
  let yMax = Math.max(...yPoints);
  let yMin = Math.min(...yPoints);
  return (Math.abs(xMax - xMin) * Math.abs(yMax - yMin)) / 2;
};

let answer = largestTriangleArea([
  [0, 0],
  [0, 1],
  [1, 0],
  [0, 2],
  [2, 0],
]);
console.log(answer);
