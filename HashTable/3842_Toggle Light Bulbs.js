/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
  const hashmap = new Map();
  for (let bulb of bulbs) {
    if (hashmap.has(bulb)) {
      hashmap.set(bulb, hashmap.get(bulb) + 1);
    } else {
      hashmap.set(bulb, 1);
    }
  }

  let res = [];
  for (let [key, value] of hashmap) {
    if (value % 2 !== 0) {
      res.push(key);
    }
  }

  return res.sort((a, b) => a - b);
};

const bulbs = [10, 30, 20, 10];
console.log(toggleLightBulbs(bulbs));
