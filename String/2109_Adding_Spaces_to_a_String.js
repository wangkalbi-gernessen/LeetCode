/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let res = "";
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[j] && j < spaces.length) {
      res += " " + s[i];
      j++;
    } else {
      res += s[i];
    }
  }
  return res;
};

// let answer = addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]);
// let answer = addSpaces("icodeinpython", [1, 5, 7, 9]);
let answer = addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]);
console.log(answer);
