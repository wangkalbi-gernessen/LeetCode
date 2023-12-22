/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let str = s;
  let status = true;

  while (status) {
    if (str.includes(part)) {
      str = str.replace(part, "");
    } else {
      status = false;
    }
  }
  return str;
};

// let answer = removeOccurrences("daabcbaabcbc", "abc");
let answer = removeOccurrences("axxxxyyyyb", "xy");
console.log(answer);
