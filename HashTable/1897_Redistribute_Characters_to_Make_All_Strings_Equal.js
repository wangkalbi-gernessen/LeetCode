/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  let n = words.length;

  if (n === 1) {
    return true;
  }
  let hashmap = new Map();
  let joined = words.join("");

  for (let value of joined) {
    if (!hashmap.has(value)) {
      hashmap.set(value, 1);
    } else {
      hashmap.set(value, hashmap.get(value) + 1);
    }
  }

  console.log(hashmap);

  for (let key of hashmap.keys()) {
    if (hashmap.get(key) % n !== 0) {
      return false;
    }
  }
  return true;
};

// let answer = makeEqual(["abc", "aabc", "bc"]);
let answer = makeEqual([
  "caaaaa",
  "aaaaaaaaa",
  "a",
  "bbb",
  "bbbbbbbbb",
  "bbb",
  "cc",
  "cccccccccccc",
  "ccccccc",
  "ccccccc",
  "cc",
  "cccc",
  "c",
  "cccccccc",
  "c",
]);
console.log(answer);
