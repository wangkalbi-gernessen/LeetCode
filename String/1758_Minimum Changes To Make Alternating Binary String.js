/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let n = s.length;
  if (n === 1) {
    return 0;
  }

  let res = 0;
  let str = s[0];
  for (let i = 1; i < s.length; i++) {
    if (str.length === 0 || str[str.length - 1] === s[i]) {
      str += s[i];
    } else {
      res += Math.floor(str.length / 2);
      str = "";
    }
  }

  res += Math.floor(str.length / 2);
  return res;
};

// let answer = minOperations("0100");
let answer = minOperations("110010");
console.log(answer);
