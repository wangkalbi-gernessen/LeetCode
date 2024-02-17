/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const volume = length * width * height;
  const isBulky =
    length >= Math.pow(10, 4) ||
    width >= Math.pow(10, 4) ||
    height >= Math.pow(10, 4) ||
    mass >= Math.pow(10, 4) ||
    volume >= Math.pow(10, 9)
      ? true
      : false;
  //   console.log(isBulky);
  const isHeavy = mass >= 100 ? true : false;
  let result = "";

  if (isBulky && isHeavy) {
    result += "Both";
  } else if (!isBulky && !isHeavy) {
    result += "Neither";
  } else if (isBulky && !isHeavy) {
    result += "Bulky";
  } else {
    result += "Heavy";
  }
  return result;
};

let answer = categorizeBox(1000, 35, 700, 300);
console.log(answer);
