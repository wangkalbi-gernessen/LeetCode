/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let hashmap = new Map();
  for (let value of nums) {
    if (!hashmap.has(value)) {
      hashmap.set(value, 1);
    } else {
      hashmap.set(value, hashmap.get(value) + 1);
    }
  }

  let pairs = 0;
  let leftNum = 0;
  for (let key of hashmap.keys()) {
    pairs += Math.floor(hashmap.get(key) / 2);
    if (hashmap.get(key) % 2 !== 0) {
      leftNum++;
    }
  }
  return [pairs, leftNum];
};

let answer = numberOfPairs([1, 3, 2, 1, 3, 2, 2]);
console.log(answer);
