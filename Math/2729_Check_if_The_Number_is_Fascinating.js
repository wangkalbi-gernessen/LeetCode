/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let concatenated = `${n}${n * 2}${n * 3}`;
  //   console.log(concatenated);
  if (concatenated.length >= 10) {
    return false;
  } else {
    return new Set(concatenated).size === 9 && !concatenated.includes("0");
  }
};

// let answer = isFascinating(192);
let answer = isFascinating(100);
// let answer = isFascinating(783);
console.log(answer);
