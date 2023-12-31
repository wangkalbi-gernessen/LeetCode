/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) {
    return 0;
  }
  let res = Array(n + 1).fill(0);
  res[0] = 0;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      res[i] = res[i / 2];
    } else {
      res[i] = res[Math.floor(i / 2)] + res[Math.floor(i / 2) + 1];
    }
  }
  //   console.log(res);
  return Math.max(...res);
};

let answer = getMaximumGenerated(7);
// let answer = getMaximumGenerated(2);
// let answer = getMaximumGenerated(3);
console.log(answer);
