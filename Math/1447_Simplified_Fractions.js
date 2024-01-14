/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let res = new Set();
  let i = 2;
  while (i <= n) {
    let j = 1;
    while (j < n) {
      if (j / i > 0 && j / i < 1) {
        let frac = simplify(i, j);
        res.add(frac);
      }
      j++;
    }
    i++;
  }
  return [...res];
};

let simplify = (num1, num2) => {
  for (let i = Math.max(num1, num2); i > 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      num1 /= i;
      num2 /= i;
    }
  }
  return `${num2}/${num1}`;
};

let answer = simplifiedFractions(4);
console.log(answer);
