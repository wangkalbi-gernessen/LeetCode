/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const altitudes = [0];
  let curr = 0;
  for (let g of gain) {
    curr += g;
    altitudes.push(curr);
  }

  return Math.max(...altitudes);
};

const gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
