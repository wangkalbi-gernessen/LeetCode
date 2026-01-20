/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let moves = 0;
  const max = Math.max(...nums);
  for (let num of nums) {
    moves += max - num;
  }
  return moves;
};

const nums = [2, 1, 3];
console.log(minMoves(nums));
