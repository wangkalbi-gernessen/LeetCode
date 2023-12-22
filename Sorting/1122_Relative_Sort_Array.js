/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.includes(arr2[i])) {
      let index = arr1.indexOf(arr2[i]);
      let val = arr1.splice(index, 1).reduce((val) => val);
      arr.push(val);
    }
  }
  //   console.log(arr1);
  //   console.log(arr);
  arr1.sort((a, b) => a - b);
  return [...arr, ...arr1];
};

// let answer = relativeSortArray(
//   [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
//   [2, 1, 4, 3, 9, 6]
// );
let answer = relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]);
console.log(answer);
