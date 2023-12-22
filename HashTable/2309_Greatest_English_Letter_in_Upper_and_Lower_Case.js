/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  console.log(map);
};

let answer = greatestLetter("lEeTcOdE");
console.log(answer);
