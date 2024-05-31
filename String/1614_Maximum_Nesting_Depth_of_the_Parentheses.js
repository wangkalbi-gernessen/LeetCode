/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let onlyParenthesis = s
    .split("")
    .filter((item) => item === "(" || item === ")");
  //   console.log(onlyParenthesis);
  let stack = [];
  let maxDepth = 0;
  for (let i = 0; i < onlyParenthesis.length; i++) {
    if (onlyParenthesis[i] === ")") {
      maxDepth = Math.max(maxDepth, stack.length);
      stack.pop();
    } else {
      stack.push("(");
    }
  }
  return maxDepth;
};

let answer = maxDepth("(1+(2*3)+((8)/4))+1");
console.log(answer);
