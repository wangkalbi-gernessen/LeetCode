/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "B") {
      if (stack[stack.length - 1] === "A") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else if (s[i] === "D") {
      if (stack[stack.length - 1] === "C") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  //   console.log(stack.join(""));
  return stack.join("").length;
};

// let answer = minLength("ABFCACDB");
let answer = minLength("ACBBD");
console.log(answer);
