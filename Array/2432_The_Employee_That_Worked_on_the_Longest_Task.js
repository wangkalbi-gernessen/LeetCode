/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let id;
  let longest = 0;
  let duration;
  for (let i = 0; i < logs.length; i++) {
    if (i === 0) {
      duration = Math.abs(0 - logs[0][1]);
      id = logs[0][0];
    } else {
      duration = Math.abs(logs[i - 1][1] - logs[i][1]);
    }

    // if()
  }
  console.log(map);
};

let answer = hardestWorker(10, [
  [0, 3],
  [2, 5],
  [0, 9],
  [1, 15],
]);
console.log(answer);
