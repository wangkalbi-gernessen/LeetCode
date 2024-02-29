/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  let sorted = num
    .toString()
    .split("")
    .sort((a, b) => a - b);

  let num1 = "";
  let num2 = "";
  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 === 0) {
      num1 += sorted[i];
    } else {
      num2 += sorted[i];
    }
  }
  return Number(num1) + Number(num2);
};

let answer = splitNum(4325);
console.log(answer);
