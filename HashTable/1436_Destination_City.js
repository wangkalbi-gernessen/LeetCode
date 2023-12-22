/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let map = new Map();
  for (let i = 0; i < paths.length; i++) {
    if (!map.has(paths[i][0])) {
      map.set(paths[i][0], 1);
    } else {
      map.set(paths[i][0], map.get(paths[i][0]) + 1);
    }

    if (!map.has(paths[i][1])) {
      map.set(paths[i][1], 0);
    }
  }
  //   console.log(map);
  let res = "";
  for (let [key, value] of map) {
    if (value === 0) {
      res += key;
    }
  }
  return res;
};

// let answer = destCity([
//   ["London", "New York"],
//   ["New York", "Lima"],
//   ["Lima", "Sao Paulo"],
// ]);
let answer = destCity([
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
]);
console.log(answer);
