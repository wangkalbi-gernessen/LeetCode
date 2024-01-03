/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let res = Array(edges.length + 1)
    .fill(0)
    .map(() => Array());

  for (let i = 0; i < edges.length; i++) {
    res[edges[i][0] - 1].push(edges[i][1]);
    res[edges[i][1] - 1].push(edges[i][0]);
  }
  //   console.log(res);
  let ans = 0;
  for (let j = 0; j < res.length; j++) {
    if (res[j].length === edges.length) {
      ans = j + 1;
    }
  }
  return ans;
};

let answer = findCenter([
  [1, 2],
  [2, 3],
  [4, 2],
]);
console.log(answer);
