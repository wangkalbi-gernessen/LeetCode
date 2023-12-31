/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let row = coordinates[0].charCodeAt(0);
  let column = coordinates[1];

  if (row % 2 === 0) {
    if (column % 2 === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    if (column % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

// let answer = squareIsWhite("a1");
// let answer = squareIsWhite("h3");
let answer = squareIsWhite("c7");
console.log(answer);
