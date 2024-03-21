/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    let substring = "";
    for (let j = i; j < s.length; j++) {
      substring += s.charAt(j);

      if (substring.length === 2) {
        set.add(substring);
      } else if (substring.length > 2) {
        break;
      } else {
        continue;
      }
    }
  }
  //   console.log(set);
  set = [...set];
  console.log(set);

  let reversed = s.split("").reverse().join("");
  //   console.log(reversed);
  for (let i = 0; i < reversed.length; i++) {
    let substring = "";
    for (let j = i; j < reversed.length; j++) {
      substring += reversed.charAt(j);

      if (substring.length === 2 && set.includes(substring)) {
        return true;
      } else if (substring.length > 2) {
        break;
      } else {
        continue;
      }
    }
  }
  return false;
};

// let answer = isSubstringPresent("leetcode");
let answer = isSubstringPresent("abcd");
console.log(answer);
