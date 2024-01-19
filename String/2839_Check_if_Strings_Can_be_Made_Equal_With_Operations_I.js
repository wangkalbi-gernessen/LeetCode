/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
  let n = s1.length;
  s1 = s1.split("");
  let s1Elements = [];
  let temp;
  for (let i = 0; i < n - 2; i++) {
    // use destructuring
    [s1[i], s1[i + 2]] = [s1[i + 2], s1[i]];

    if (s1.join("") === s2) {
      return true;
    } else {
      s1Elements.push(s1.join(""));
    }
  }
  //   console.log(s1Elements);
  s2 = s2.split("");
  for (let i = 0; i < n - 2; i++) {
    // use destructuring
    [s2[i], s2[i + 2]] = [s2[i + 2], s2[i]];

    if (s1Elements.includes(s2.join(""))) {
      return true;
    }
  }
  return false;
};

// let answer = canBeEqual("abcd", "cdab");
let answer = canBeEqual("bnxw", "bwxn");
console.log(answer);
