/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let available = 0;
  // Find a rook from this board
  let row;
  let column;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        column = board[i].indexOf("R");
        row = i;
        break;
      }
    }
  }
  //   console.log(row, column);

  // Find a pawn from top to the rook position
  if (row !== 0) {
    let i = row - 1;
    while (i >= 0) {
      if (board[i][column] === "p") {
        available++;
        break;
      } else if (board[i][column] !== "." && board[i][column] !== "p") {
        break;
      }
      i--;
    }
  }

  // Find a pawn from the rook position to bottom
  if (row !== board.length - 1) {
    let i = row + 1;
    while (i < board.length) {
      if (board[i][column] === "p") {
        available++;
        break;
      } else if (board[i][column] !== "." && board[i][column] !== "p") {
        break;
      }
      i++;
    }
  }

  // Find a pawn from left to the rook position
  if (column !== 0) {
    let i = column - 1;
    while (i >= 0) {
      if (board[row][i] === "p") {
        available++;
        break;
      } else if (board[row][i] !== "." && board[row][i] !== "p") {
        break;
      }
      i--;
    }
  }

  // Find a pawn from left to the rook position
  if (column !== board[row].length - 1) {
    let i = column + 1;
    while (i < board[row].length) {
      if (board[row][i] === "p") {
        available++;
        break;
      } else if (board[row][i] !== "." && board[row][i] !== "p") {
        break;
      }
      i++;
    }
  }
  return available;
};

let answer = numRookCaptures([
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
]);
console.log(answer);
