/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let res = 0;
  for (let i = 0; i < mat.length; i++) {
    let oneCountInRow = mat[i].reduce(
      (accumlator, num) => (num === 1 ? accumlator + 1 : accumlator),
      0
    );
    if (oneCountInRow === 1) {
      let indexOf = mat[i].indexOf(1);
      //   console.log(indexOf);
      let j = 0;
      let count = 0;
      while (j < mat.length) {
        if (mat[j][indexOf] === 1 && i !== j) {
          count++;
        }
        j++;
      }

      if (count === 0) {
        res++;
      }
    }
  }
  return res;
};

let answer = numSpecial([
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
]);
console.log(answer);
