/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let i = 0;
  let res = 0;
  let column = strs[0].length;
  let row = strs.length;
  while (i < column) {
    let j = 0;
    let str = "";
    while (j < row) {
      str += strs[j][i];
      j++;
    }

    // console.log(str);
    let sorted = str.split("").sort().join("");
    // console.log(sorted);
    if (str !== sorted) {
      res++;
    }
    i++;
  }
  return res;
};

let answer = minDeletionSize(["cba", "daf", "ghi"]);
console.log(answer);
