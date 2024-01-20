/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let distance = 0;
  let underscoreNums = moves.split("").filter((char) => char === "_").length;
  // console.log(underscoreNums);
  let letters = moves
    .split("")
    .filter((char) => char !== "_")
    .join("");
  // console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    if (letters.charAt(i) === "L") {
      distance++;
    } else {
      distance--;
    }
  }
  return Math.abs(distance) + underscoreNums;
};

let answer = furthestDistanceFromOrigin("L_RL__R");
console.log(answer);
