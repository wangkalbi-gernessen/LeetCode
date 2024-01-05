/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  if (num % 3 !== 0) {
    return [];
  } else {
    let division = num / 3;
    return [division - 1, division, division + 1];
  }
};

let answer = sumOfThree(33);
console.log(answer);
