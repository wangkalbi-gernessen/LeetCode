/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let reversed1 = parseInt(num.toString().split("").reverse().join(""));
  console.log(reversed1);
  let reversed2 = parseInt(reversed1.toString().split("").reverse().join(""));
  console.log(reversed2);
  return num === reversed2 ? true : false;
};

// let answer = isSameAfterReversals(526);
let answer = isSameAfterReversals(1800);
console.log(answer);
