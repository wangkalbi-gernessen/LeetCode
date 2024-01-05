/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  let map = new Map();
  for (let i = 0; i < score.length; i++) {
    map.set(i, score[i][k]);
  }
  //   console.log(map);

  let sortedByValue = [...map].sort((a, b) => b[1] - a[1]);
  //   console.log(sortedByValue);
  let res = [];
  for (let j = 0; j < sortedByValue.length; j++) {
    res.push(score[sortedByValue[j][0]]);
  }
  return res;
};

let answer = sortTheStudents(
  [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  2
);
console.log(answer);
