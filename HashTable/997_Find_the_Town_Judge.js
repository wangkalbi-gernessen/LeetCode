/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (trust.length === 0 && n === 1) {
    return n;
  }

  let trustMap = new Map();
  let trustedMap = new Map();
  //   1. set key/value in trustMap
  for (let i = 0; i < trust.length; i++) {
    if (!trustMap.has(trust[i][0])) {
      trustMap.set(trust[i][0], 1);
    } else {
      trustMap.set(trust[i][0], trustMap.get(trust[i][0]) + 1);
    }
  }
  //   console.log(trustMap);

  // 2. set key/value in trustedMap
  for (let i = 0; i < trust.length; i++) {
    if (!trustedMap.has(trust[i][1])) {
      trustedMap.set(trust[i][1], 1);
    } else {
      trustedMap.set(trust[i][1], trustedMap.get(trust[i][1]) + 1);
    }
  }
  //   console.log(trustedMap);

  let i = 1;
  while (i <= n) {
    if (!trustMap.has(i) && trustedMap.get(i) == n - 1) {
      return i;
    }
    i++;
  }
  return -1;
};

// let answer = findJudge(2, [[1, 2]]);
// let answer = findJudge(3, [
//   [1, 3],
//   [2, 3],
// ]);
let answer = findJudge(3, [
  [1, 3],
  [2, 3],
  [3, 1],
]);
console.log(answer);
