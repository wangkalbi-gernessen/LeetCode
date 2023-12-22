/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let map = new Map();
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  //   console.log(map);
  for (let j = 0; j < t.length; j++) {
    if (!map.has(t[j])) {
      result++;
    } else {
      if (map.get(t[j]) >= 1) {
        map.set(t[j], map.get(t[j]) - 1);
      } else {
        result++;
      }
    }
  }
  return result;
};

// let answer = minSteps("bab", "aba");
let answer = minSteps("leetcode", "practice");
console.log(answer);
