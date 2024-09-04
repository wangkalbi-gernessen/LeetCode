/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  num1 = num1.toString().padStart(4, "0");
  num2 = num2.toString().padStart(4, "0");
  num3 = num3.toString().padStart(4, "0");
  //   console.log(num1, num2, num3);
  let res = "";
  for (let i = 0; i < 4; i++) {
    let digits = [num1[i], num2[i], num3[i]];
    let min = Math.min(...digits);
    res += min;
  }
  return Number(res);
};

let answer = generateKey(1, 10, 1000);
console.log(answer);
