/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let uppercase = new Set();
  let lowercase = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      uppercase.add(s[i]);
    } else {
      lowercase.add(s[i]);
    }
  }
  //   console.log(uppercase);
  //   console.log(lowercase);
  let bothChecker = [...uppercase]
    .filter((char) => [...lowercase].indexOf(char.toLowerCase()) !== -1)
    .sort();
  //   console.log(bothChecker);
  return bothChecker.length !== 0 ? bothChecker[bothChecker.length - 1] : "";
};

// let answer = greatestLetter("lEeTcOdE");
let answer = greatestLetter("AbCdEfGhIjK");
// let answer = greatestLetter(
//   "nzmguNAEtJHkQaWDVSKxRCUivXpGLBcsjeobYPFwTZqrhlyOIfdM"
// );
console.log(answer);
