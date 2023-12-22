/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let rotatedStr = s;
  let length = s.length;
  let i = 1;
  while (i <= length) {
    rotatedStr = s.substring(i, s.length) + s.substring(0, i);
    // console.log(rotatedStr);
    if (rotatedStr === goal) {
      return true;
    }
    i++;
  }
  return false;
};

// let answer = rotateString("abcde", "cdeab");
// let answer = rotateString("abcde", "abced");
let answer = rotateString("abcde", "abcde");
console.log(answer);
