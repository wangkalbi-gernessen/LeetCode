/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  let sorted = num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .map((num) => parseInt(num));

  let even = sorted.filter((num) => num % 2 === 0);
  let odd = sorted.filter((num) => num % 2 !== 0);

  let res = [];
  num = num
    .toString()
    .split("")
    .map((num) => parseInt(num));

  for (let digit of num) {
    if (digit % 2 === 0) {
      res.push(even.shift());
    } else {
      res.push(odd.shift());
    }
  }
  //   console.log(res);
  return res.join("");
};

let answer = largestInteger(65875);
console.log(answer);
