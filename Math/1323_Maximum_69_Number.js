/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let numStr = num.toString().split("");
  let i = 0;
  while (i < numStr.length) {
    if (numStr[i] === "6") {
      numStr[i] = "9";
      break;
    }
    i++;
  }

  return parseInt(numStr.join(""));
};

// let answer = maximum69Number(9669);
let answer = maximum69Number(9999);
console.log(answer);
