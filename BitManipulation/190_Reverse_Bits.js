/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let binaryNum = n.split("");
  console.log(binaryNum);
  return parseInt(binaryNum.reverse().join(""), 2);
};

let answer = reverseBits("00000010100101000001111010011100");
// let answer = reverseBits("11111111111111111111111111111101");
console.log(answer);
