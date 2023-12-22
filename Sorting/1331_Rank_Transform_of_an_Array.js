/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let map = new Map();
  let rank = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      rank++;
      map.set(sorted[i], rank);
    }
  }
  //   console.log(map);
  console.log(arr);
  for (let j = 0; j < arr.length; j++) {
    arr[j] = map.get(arr[j]);
  }
  return arr;
};

// let answer = arrayRankTransform([40, 10, 20, 30]);
let answer = arrayRankTransform([40, 10, 10, 30]);
console.log(answer);
