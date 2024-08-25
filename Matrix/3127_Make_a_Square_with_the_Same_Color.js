/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let b =
        (grid[i][j] === "B") +
        (grid[i][j + 1] === "B") +
        (grid[i + 1][j] === "B") +
        (grid[i + 1][j + 1] === "B");
      let w =
        (grid[i][j] === "W") +
        (grid[i][j + 1] === "W") +
        (grid[i + 1][j] === "W") +
        (grid[i + 1][j + 1] === "W");
      //   console.log(b, w);
      if (Math.max(b, w) >= 3) {
        return true;
      }
    }
  }
  return false;
};

let answer = canMakeSquare([
  ["B", "W", "B"],
  ["B", "W", "W"],
  ["B", "W", "B"],
]);
console.log(answer);
