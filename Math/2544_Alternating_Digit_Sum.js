/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let numsString = n.toString();
  // console.log(numsString);
  let sum = 0;
  for (let i = 0; i < numsString.length; i++) {
    if (i % 2 !== 0) {
      sum += parseInt(numsString[i]) * -1;
    } else {
      sum += parseInt(numsString[i]) * 1;
    }
  }
  // console.log(sum);
  return sum;
};

// let answer = alternateDigitSum(521);
// let answer = alternateDigitSum(111);
let answer = alternateDigitSum(886996);
console.log(answer);
