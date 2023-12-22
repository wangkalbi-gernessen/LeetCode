/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      if (map.get(t[i]) !== s[i]) {
        return false;
      }
    } else if ([...map.values()].includes(s[i]) === false) {
      map.set(t[i], s[i]);
    } else {
      return false;
    }
  }
  return true;
};

// let answer = isIsomorphic("egg", "add");
let answer = isIsomorphic("foo", "bar");
console.log(answer);
