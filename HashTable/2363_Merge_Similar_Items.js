/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let map = new Map();

  for (let i = 0; i < items1.length; i++) {
    if (!map.has(items1[i][0])) {
      map.set(items1[i][0], items1[i][1]);
    } else {
      map.set(items1[i][0], map.get(items1[i][0]) + items1[i][1]);
    }
  }
  // console.log(map);

  for (let i = 0; i < items2.length; i++) {
    if (!map.has(items2[i][0])) {
      map.set(items2[i][0], items2[i][1]);
    } else {
      map.set(items2[i][0], map.get(items2[i][0]) + items2[i][1]);
    }
  }
  // console.log(map);

  return [...map].sort((a, b) => a[0] - b[0]);
};

let answer = mergeSimilarItems(
  [
    [1, 1],
    [3, 2],
    [2, 3],
  ],
  [
    [2, 1],
    [3, 2],
    [1, 3],
  ]
);
// let answer = mergeSimilarItems(
//   [
//     [1, 1],
//     [4, 5],
//     [3, 8],
//   ],
//   [
//     [3, 1],
//     [1, 5],
//   ]
// );
console.log(answer);
