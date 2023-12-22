/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let newValue = n.toString(k);
  //   console.log(newValue);
  let sum = 0;
  for (let i = 0; i < newValue.length; i++) {
    sum += parseInt(newValue[i], 10);
  }
  return sum;
};

let answer = sumBase(34, 6);
// let answer = sumBase(10, 10);
console.log(answer);
