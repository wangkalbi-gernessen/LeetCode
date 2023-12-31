/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let res = Array(n + 1).fill(0);
  res[1] = 1;
  res[2] = 2;
  //   console.log(res);
  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 2] + res[i - 1];
  }
  return res[n];
};

let answer = climbStairs(6);
console.log(answer);
