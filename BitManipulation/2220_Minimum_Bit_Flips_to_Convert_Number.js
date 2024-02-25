/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  // Convert to binary numbers
  let startBinary = start.toString(2);
  let goalBinary = goal.toString(2);
  // Add leading zeros
  let maxLength = Math.max(startBinary.length, goalBinary.length);
  let paddedStart = startBinary.padStart(maxLength, "0");
  let paddedGoal = goalBinary.padStart(maxLength, "0");
  //   console.log(paddedStart);
  //   console.log(paddedGoal);
  // Output minimum number of bit flips
  let neededFlips = 0;
  for (let i = 0; i < paddedStart.length; i++) {
    if (paddedStart[i] !== paddedGoal[i]) {
      neededFlips++;
    }
  }
  return neededFlips;
};

let answer = minBitFlips(10, 7);
console.log(answer);
