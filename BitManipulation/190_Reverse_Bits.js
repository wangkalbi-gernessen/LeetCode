/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let bits = (n >>> 0).toString(2).padStart(32, "0");
  let reverseBits = bits.split("").reverse().join("");
  console.log(reverseBits);
  return parseInt(reverseBits, 2);
};

let answer = reverseBits("00000010100101000001111010011100");
// let answer = reverseBits("11111111111111111111111111111101");
console.log(answer);
