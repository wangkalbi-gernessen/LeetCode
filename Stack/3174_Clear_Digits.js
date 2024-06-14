/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      stack.push(s[i]);
    } else {
      if (isNaN(stack[stack.length - 1])) {
        stack.pop();
      }
    }
  }
  return stack.join("");
};

let answer = clearDigits("cb34");
console.log(answer);
