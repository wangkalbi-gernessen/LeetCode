/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  //   console.log(map);
  let output = [];
  map.forEach((value, key) => {
    if (value === 1) {
      output.push(key);
    }
  });

  return output[k - 1] ? output[k - 1] : "";
};

// let answer = kthDistinct(["d", "b", "c", "b", "c", "a"], 2);
let answer = kthDistinct(["a", "b", "a"], 3);
console.log(answer);
