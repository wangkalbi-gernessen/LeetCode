/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let numberOfOne = s
    .split("")
    .reduce(
      (accumlator, num) => (num === "1" ? accumlator + 1 : accumlator),
      0
    );
  //   console.log(numberOfOne);

  let newBinary = new Array(s.length).fill(0);
  let i = 0;
  let ones = 1;
  while (ones <= numberOfOne) {
    if (ones === 1) {
      newBinary[s.length - 1] = "1";
    } else {
      newBinary[i] = "1";
      i++;
    }
    ones++;
  }
  return newBinary.join("");
};

let answer = maximumOddBinaryNumber("0101");
console.log(answer);
