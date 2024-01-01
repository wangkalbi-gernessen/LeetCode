/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  //   let arr = Array(grid.length).fill(0);
  let winner;
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    let count = grid[i].reduce(
      (accumlator, num, index) =>
        index !== i && num === 1 ? accumlator + 1 : accumlator,
      0
    );

    if (count > max) {
      max = count;
      winner = i;
    }
  }
  return winner;
};

let answer = findChampion([
  [0, 1],
  [0, 0],
]);
console.log(answer);
