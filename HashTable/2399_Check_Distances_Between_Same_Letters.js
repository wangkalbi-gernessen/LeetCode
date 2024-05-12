/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  let hashmap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!hashmap.has(s[i])) {
      hashmap.set(s[i], i);
    } else {
      if (i - hashmap.get(s[i]) - 1 !== distance[s.charCodeAt(i) - 97]) {
        return false;
      }
    }
  }
  return true;
};

let answer = checkDistances(
  "abaccb",
  [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
