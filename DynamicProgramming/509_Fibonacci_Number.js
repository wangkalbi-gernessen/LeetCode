/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let res = new Array(n + 1);
  res[0] = 0;
  res[1] = 1;
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 2] + res[i - 1];
  }

  console.log(res);
  return res[n];
};

let answer = fib(3);
console.log(answer);
