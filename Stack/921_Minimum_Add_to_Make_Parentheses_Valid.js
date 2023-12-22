/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.length;
};

let answer = minAddToMakeValid("())");
console.log(answer);
