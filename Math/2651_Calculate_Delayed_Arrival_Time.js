/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let actualTime = arrivalTime + delayedTime;
  return actualTime >= 24 ? actualTime - 24 : actualTime;
};

// let answer = findDelayedArrivalTime(15, 5);
let answer = findDelayedArrivalTime(17, 11);
console.log(answer);
