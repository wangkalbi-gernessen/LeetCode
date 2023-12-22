/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let binaryNum = parseInt(n, 2);
  let bitNum = (binaryNum >>> 0).toString(2);
  console.log(bitNum);
};

let answer = reverseBits("00000010100101000001111010011100");
// let answer = reverseBits("11111111111111111111111111111101");
console.log(answer);
