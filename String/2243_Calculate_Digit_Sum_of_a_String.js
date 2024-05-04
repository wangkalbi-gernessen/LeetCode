/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let str = "";
    for (let i = 0; i < s.length; i += k) {
      str += s
        .substring(i, i + k)
        .split("")
        .reduce((accumlator, num) => accumlator + parseInt(num), 0);
    }
    s = str;
  }
  return s;
};

let answer = digitSum("11111222223", 3);
console.log(answer);
