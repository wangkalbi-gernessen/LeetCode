/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let startCol = s[0].charCodeAt(0);
  let startRow = s[1];
  let endCol = s[3].charCodeAt(0);
  let endRow = s[4];
  // Declare an array variable named res
  let res = [];
  for (let i = startCol; i <= endCol; i++) {
    for (let j = startRow; j <= endRow; j++) {
      let char = String.fromCharCode(i);
      let concanated = char.concat(j);
      res.push(concanated);
    }
  }
  return res;
};

let answer = cellsInRange("K1:L2");
console.log(answer);
