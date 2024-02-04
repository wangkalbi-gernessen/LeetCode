/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  // deep copy of array
  let deepCopy = JSON.parse(JSON.stringify(mat));
  // shallow copy of array
  // ex) let shifted = [...map];
  for (let i = 0; i < mat.length; i++) {
    let j = 1;
    while (j <= k) {
      if (i % 2 === 0) {
        mat[i].push(mat[i].shift());
      } else {
        mat[i].unshift(mat[i].pop());
      }
      j++;
    }
  }
  console.log(deepCopy);
  console.log(mat);
  return deepCopy.toString() === mat.toString();
};

let answer = areSimilar([[1, 2]], 1);
// let answer = areSimilar(
//   [
//     [1, 2, 1, 2],
//     [5, 5, 5, 5],
//     [6, 3, 6, 3],
//   ],
//   2
// );
console.log(answer);
