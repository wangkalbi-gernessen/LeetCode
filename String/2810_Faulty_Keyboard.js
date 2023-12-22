/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let str = s;
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "i") {
      output.reverse();
    } else {
      output.push(str[i]);
    }
  }
  return output.join("");
};

// let answer = finalString("string");
let answer = finalString("poiinter");
console.log(answer);
