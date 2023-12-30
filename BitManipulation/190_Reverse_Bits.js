/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let binaryNum = n.split("").reverse().join("");
  console.log(parseInt(binaryNum, 2));
  return BigInt(binaryNum, 10);
};

let answer = reverseBits("00000010100101000001111010011100");
// let answer = reverseBits("11111111111111111111111111111101");
console.log(answer);
