/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack.length) {
      if (s[i].toLowerCase() === stack[stack.length - 1].toLowerCase()) {
        if (
          s[i] === s[i].toUpperCase() &&
          stack[stack.length - 1] === stack[stack.length - 1].toLowerCase()
        ) {
          stack.pop();
        } else if (
          s[i] === s[i].toLowerCase() &&
          stack[stack.length - 1] === stack[stack.length - 1].toUpperCase()
        ) {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

// let answer = makeGood("leEeetcode");
let answer = makeGood("abBAcC");
console.log(answer);
