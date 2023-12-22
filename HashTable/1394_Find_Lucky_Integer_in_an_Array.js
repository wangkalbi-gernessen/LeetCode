/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  console.log(map);

  let largest = -1;
  map.forEach((value, key) => {
    if (value === key) {
      largest = key > largest ? key : largest;
    }
  });
  return largest;
};

// let answer = findLucky([2, 2, 3, 4]);
// let answer = findLucky([1, 2, 2, 3, 3, 3]);
let answer = findLucky([2, 2, 2, 3, 3]);
console.log(answer);
