/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let sorted = num
    .toString()
    .split("")
    .sort((a, b) => a - b);
  console.log(sorted);
  return parseInt(sorted[0] + sorted[2]) + parseInt(sorted[1] + sorted[3]);
};

let answer = minimumSum(2932);
console.log(answer);
