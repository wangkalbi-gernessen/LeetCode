/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  //   console.log(boxTypes);

  let res = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    if (boxTypes[i][0] <= truckSize) {
      res += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      res += truckSize * boxTypes[i][1];
      truckSize = 0;
      break;
    }
  }
  return res;
};

// let answer = maximumUnits(
//   [
//     [5, 10],
//     [2, 5],
//     [4, 7],
//     [3, 9],
//   ],
//   10
// );
let answer = maximumUnits(
  [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  4
);
console.log(answer);
