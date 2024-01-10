/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  s = s.split("");
  console.log(s);
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (
      stack.length > 2 &&
      stack[stack.length - 2] === s[i] &&
      stack[stack.length - 3] === s[i]
    ) {
      stack.pop();
    }
  }
  return stack.join("");
};

// let answer = makeFancyString("aaabaaaa");
// let answer = makeFancyString("leeetcode");
let answer = makeFancyString("aaaaarsssstoooojeeee");
console.log(answer);
