/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  //   console.log(map);
  let count = map.get(s[0]);
  console.log(count);
  for (let value of map.values()) {
    if (count !== value) {
      return false;
    }
  }
  return true;
};

// let answer = areOccurrencesEqual("abacbc");
let answer = areOccurrencesEqual("aaabb");
console.log(answer);
