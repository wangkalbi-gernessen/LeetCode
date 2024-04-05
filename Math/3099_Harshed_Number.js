/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sumOfDigits = x
    .toString()
    .split("")
    .reduce((accumlator, num) => accumlator + parseInt(num), 0);
  //   console.log(sumOfDigits);
  if (x % sumOfDigits === 0) {
    return sumOfDigits;
  } else {
    return -1;
  }
};

let answer = sumOfTheDigitsOfHarshadNumber(18);
console.log(answer);
