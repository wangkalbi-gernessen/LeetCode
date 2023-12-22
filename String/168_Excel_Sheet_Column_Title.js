/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = "";
  while (columnNumber > 0) {
    let reminder = columnNumber % 26;
    if (reminder === 0) {
      res += "Z";
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      res += String.fromCharCode(reminder - 1 + "A".charCodeAt(0));
      columnNumber = Math.floor(columnNumber / 26);
    }
  }

  return res.split("").reverse().join("");
};

// let answer = convertToTitle(3);
let answer = convertToTitle(701);
// let answer = convertToTitle(28);
console.log(answer);
