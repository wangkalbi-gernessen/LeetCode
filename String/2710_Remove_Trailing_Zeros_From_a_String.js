/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let largeIndex = num.length - 1;
  for (let i = largeIndex; i >= 0; i--) {
    if (num[i] !== "0") {
      return num.slice(0, i + 1);
    }
  }
};

let answer = removeTrailingZeros("51230100");
console.log(answer);
