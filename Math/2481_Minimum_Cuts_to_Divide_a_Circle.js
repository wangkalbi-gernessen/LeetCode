/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  let res = new Array(n + 1).fill(0);
  res[1] = 0;

  for (let i = 2; i < res.length; i++) {
    if (n % 2 === 0) {
      res[i] = n / 2;
    } else {
      res[i] = n;
    }
  }
  return res[n];
};

let answer = numberOfCuts(3);
console.log(answer);
