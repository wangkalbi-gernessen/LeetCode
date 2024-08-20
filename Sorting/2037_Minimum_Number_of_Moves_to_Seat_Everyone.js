/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let minimumMoves = 0;
  for (let i = 0; i < seats.length; i++) {
    minimumMoves += Math.abs(seats[i] - students[i]);
  }
  return minimumMoves;
};

let answer = minMovesToSeat([3, 1, 5], [2, 7, 4]);
console.log(answer);
