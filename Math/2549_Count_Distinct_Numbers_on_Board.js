/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  let boards = new set(n);
  let i = n;

  while (boards.size !== n) {
    if (n % i === 1) {
      boards.push(i);
    }
    i--;
  }
  console.log(boards);
};

let answer = distinctIntegers(5);
console.log(answer);
