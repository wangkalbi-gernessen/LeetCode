/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xBinary = x.toString(2);
  let yBinary = y.toString(2);
  let maxLength = Math.max(xBinary.length, yBinary.length);
  let paddedX = xBinary.padStart(maxLength, "0");
  let paddedY = yBinary.padStart(maxLength, "0");
  console.log(paddedX);
  console.log(paddedY);
  let res = 0;
  for (let i = 0; i < paddedX.length; i++) {
    if (paddedX[i] !== paddedY[i]) {
      res++;
    }
  }
  return res;
};

let answer = hammingDistance(1, 4);
console.log(answer);
