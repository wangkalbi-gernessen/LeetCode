/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let res = [...score];
  let sorted = score.sort((a, b) => b - a);
  //   console.log(sorted);
  //   console.log(res);
  let index;
  for (let i = 0; i < sorted.length; i++) {
    index = res.indexOf(sorted[i]);
    if (i === 0) {
      res[index] = "Gold Medal";
    } else if (i === 1) {
      res[index] = "Silver Medal";
    } else if (i === 2) {
      res[index] = "Bronze Medal";
    } else {
      res[index] = (i + 1).toString();
    }
  }
  return res;
};

// let answer = findRelativeRanks([10, 3, 8, 9, 4]);
let answer = findRelativeRanks([5, 4, 3, 2, 1]);
console.log(answer);
