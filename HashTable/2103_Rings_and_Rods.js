/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let hashmap = new Map();
  for (let i = 0; i < rings.length; i += 2) {
    if (!hashmap.has(rings[i + 1])) {
      hashmap.set(rings[i + 1], rings[i]);
    } else {
      if (hashmap.get(rings[i + 1]).includes(rings[i])) {
        continue;
      } else {
        hashmap.set(rings[i + 1], hashmap.get(rings[i + 1]) + rings[i]);
      }
    }
  }

  let count = [...hashmap.values()].filter((colors) => colors.length === 3);
  return count.length;
};

let answer = countPoints("B0B6G0R6R0R6G9");
console.log(answer);
