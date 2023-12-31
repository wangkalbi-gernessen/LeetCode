/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let res = new Array(n + 1);
  console.log(res);
  res[0] = 0;
  res[1] = 1;
  res[2] = 1;
  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 3] + res[i - 2] + res[i - 1];
  }
  return res[n];
};

let answer = tribonacci(5);
// let answer = tribonacci(4);
console.log(answer);
