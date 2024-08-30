/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let position = 0;
  for (let command of commands) {
    if (command === "UP") {
      position -= n;
    } else if (command === "DOWN") {
      position += n;
    } else if (command === "LEFT") {
      position -= 1;
    } else {
      position += 1;
    }
  }
  return position;
};

let answer = finalPositionOfSnake(2, ["RIGHT", "DOWN"]);
console.log(answer);
