/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let testedDevices = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      testedDevices++;
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
      }
    } else {
      continue;
    }
  }
  return testedDevices;
};

// let answer = countTestedDevices([1, 1, 2, 1, 3]);
let answer = countTestedDevices([0, 2]);
console.log(answer);
