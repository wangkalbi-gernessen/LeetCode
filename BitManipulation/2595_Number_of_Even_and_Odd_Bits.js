/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  let binary = n.toString(2).split("").reverse().join("");
  console.log(binary);
  let output = [0, 0];
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (i % 2 === 0) {
        output[0]++;
      } else {
        output[1]++;
      }
    }
  }
  return output;
};

let answer = evenOddBit(17);
console.log(answer);
