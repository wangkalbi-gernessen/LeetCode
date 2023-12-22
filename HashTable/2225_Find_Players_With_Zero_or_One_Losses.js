/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let res = new Array(2);
  let noLoss = [];
  let oneLoss = [];
  let map = new Map();
  for (let i = 0; i < matches.length; i++) {
    if (!map.has(matches[i][0])) {
      map.set(matches[i][0], 0);
    }
    if (!map.has(matches[i][1])) {
      map.set(matches[i][1], 1);
    } else {
      map.set(matches[i][1], map.get(matches[i][1]) + 1);
    }
  }
  console.log(map);

  for (let [key, value] of map) {
    if (value === 0) {
      noLoss.push(key);
    }
    if (value === 1) {
      oneLoss.push(key);
    }
  }

  res[0] = noLoss.sort((a, b) => a - b);
  res[1] = oneLoss.sort((a, b) => a - b);

  return res;
};

let answer = findWinners([
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
]);
console.log(answer);
