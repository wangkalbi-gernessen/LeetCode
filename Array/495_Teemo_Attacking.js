/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let total = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      total += timeSeries[i + 1] - timeSeries[i];
    } else {
      total += duration;
    }
  }
  return total;
};

let answer = findPoisonedDuration([1, 4], 2);
// let answer = findPoisonedDuration([1, 2], 2);
console.log(answer);
