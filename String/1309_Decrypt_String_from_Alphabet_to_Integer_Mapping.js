/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let substring = s.substring(i, i + 3);
    if (substring.endsWith("#")) {
      let num = parseInt(s.substring(i, i + 2));
      let char = String.fromCharCode(num + 96);
      res += char;
      i += 2;
    } else {
      res += String.fromCharCode(parseInt(s[i]) + 96);
    }
  }
  return res;
};

let answer = freqAlphabets("10#11#12");
console.log(answer);
