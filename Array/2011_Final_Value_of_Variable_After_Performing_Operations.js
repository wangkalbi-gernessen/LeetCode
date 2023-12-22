/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let finalValue = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "--X" || operations[i] === "X--") {
      finalValue--;
    } else {
      finalValue++;
    }
  }
  return finalValue;
};

// let answer = finalValueAfterOperations(["--X", "X++", "X++"]);
let answer = finalValueAfterOperations(["++X", "++X", "X++"]);
console.log(answer);
