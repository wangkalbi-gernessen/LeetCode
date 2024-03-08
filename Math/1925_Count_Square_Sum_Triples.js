/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let poweredN = Math.pow(n, 2);
  let res = 0;
  for (let i = 1; i < n; i++) {
    let poweredA = Math.pow(i, 2);
    for (let j = 1; j < n; j++) {
      let poweredB = Math.pow(j, 2);
      let c = Math.sqrt(poweredA + poweredB);
      if (Number.isInteger(c) && c <= n) {
        res++;
      }
    }
  }
  return res;
};

// let answer = countTriples(5);
let answer = countTriples(10);
console.log(answer);
