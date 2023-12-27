/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let count = 0;
  let numArr = num.toString();
  for (let numChar of numArr) {
    if (num % parseInt(numChar) === 0) {
      count++;
    }
  }
  return count;
};

// let answer = countDigits(7);
let answer = countDigits(121);
console.log(answer);
