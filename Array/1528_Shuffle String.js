/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const newString = Array(s.length).fill(" ");
  for (let i = 0; i < s.length; i++) {
    newString[indices[i]] = s[i];
  }

  return newString.join("");
};

const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices));
