/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  // stack for free chairs
  let stack = [];
  let res = 0;
  for (let char of s) {
    if (char === "E") {
      if (stack[stack.length - 1] === "L") {
        stack.pop();
      } else {
        res++;
      }
    } else {
      stack.push("L");
    }
  }
  return res;
};

let answer = minimumChairs("EEEEEEE");
console.log(answer);
