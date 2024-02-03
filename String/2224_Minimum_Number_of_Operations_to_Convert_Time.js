/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  const currentHoursMins = current.split(":");
  const correctHoursMins = correct.split(":");

  let difference =
    (correctHoursMins[0] - currentHoursMins[0]) * 60 +
    (correctHoursMins[1] - currentHoursMins[1]);
  //   console.log(difference);
  let res = 0;
  while (difference > 0) {
    if (difference >= 60) {
      difference -= 60;
    } else if (difference >= 15) {
      difference -= 15;
    } else if (difference >= 5) {
      difference -= 5;
    } else {
      difference--;
    }
    res++;
  }
  return res;
};

let answer = convertTime("02:30", "04:35");
console.log(answer);
