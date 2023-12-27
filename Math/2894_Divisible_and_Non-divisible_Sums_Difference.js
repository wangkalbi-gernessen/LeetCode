/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let num1 = 1;
  let num2 = 1;
  let i = 1;
  while (i <= n) {
    if (i % m === 0) {
      num2 += i;
    } else {
      num1 += i;
    }
    i++;
  }
  return num1 - num2;
};

// let answer = differenceOfSums(10, 3);
let answer = differenceOfSums(5, 1);
console.log(answer);
