/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  let differences = [];
  for (let i = 0; i < capacity.length; i++) {
    differences.push(capacity[i] - rocks[i]);
  }
  //   console.log(differences);
  differences.sort((a, b) => a - b);
  //   console.log(differences);
  let index = 0;
  while (additionalRocks > 0) {
    if (additionalRocks - differences[index] >= 0) {
      additionalRocks = additionalRocks - differences[index];
      differences[index] = 0;
    } else {
      break;
    }
    index++;
  }

  let fullCapacityNums = differences.reduce(
    (accumlator, num) => (num === 0 ? accumlator + 1 : accumlator),
    0
  );
  return fullCapacityNums;
};

let answer = maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2);
console.log(answer);
