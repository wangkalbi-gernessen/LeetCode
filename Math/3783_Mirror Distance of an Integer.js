/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
  let reversedNum = parseInt(n.toString().split("").reverse().join(""));
  return Math.abs(n - reversedNum);
};

const n = 25;
console.log(mirrorDistance(n));
