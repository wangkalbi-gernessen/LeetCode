/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  let ans1 =
    ((coordinate1.charCodeAt(0) - 96) % 2 !== 0 &&
      Number(coordinate1.charAt(1)) % 2 !== 0) ||
    ((coordinate1.charCodeAt(0) - 96) % 2 === 0 &&
      Number(coordinate1.charAt(1)) % 2 === 0);
  let ans2 =
    ((coordinate2.charCodeAt(0) - 96) % 2 !== 0 &&
      Number(coordinate2.charAt(1)) % 2 !== 0) ||
    ((coordinate2.charCodeAt(0) - 96) % 2 === 0 &&
      Number(coordinate2.charAt(1)) % 2 === 0);
  return ans1 === ans2;
};

// let answer = checkTwoChessboards("a1", "c3");
let answer = checkTwoChessboards("a1", "h3");
console.log(answer);
