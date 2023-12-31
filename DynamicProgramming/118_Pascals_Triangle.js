/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // base state
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }

  // when numRows are over 2
  let res = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    let j = 0;
    let ele = [];
    while (j <= i) {
      if (j === 0 || j === i) {
        ele.push(1);
      } else {
        ele.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
      j++;
    }
    res.push(ele);
  }
  // console.log(res);

  return res;
};

// let answer = generate(2);
let answer = generate(6);
console.log(answer);
