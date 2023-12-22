/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let output = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      output.push(s[i]);
    } else {
      output.pop();
    }
  }
  return output.join("");
};

let answer = removeStars("leet**cod*e");
// let answer = removeStars("erase*****");
console.log(answer);
