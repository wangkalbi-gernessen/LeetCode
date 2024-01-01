/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  //base state
  if (rowIndex === 0) {
    return [1];
  } else if (rowIndex === 1) {
    return [1, 1];
  }
  // when rowIndex is over 2
};

let answer = getRow([1, 3, 3, 1]);
console.log(answer);
