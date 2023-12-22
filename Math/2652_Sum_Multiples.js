/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
};

// let answer = sumOfMultiples(7);
// let answer = sumOfMultiples(10);
let answer = sumOfMultiples(9);
console.log(answer);
