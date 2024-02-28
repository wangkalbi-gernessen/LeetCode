/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) === s.charCodeAt(i + 1)) {
      continue;
    }

    if (
      s.charCodeAt(i) >= 65 &&
      s.charCodeAt(i) <= 90 &&
      s.charCodeAt(i) + 32 === s.charCodeAt(i + 1)
    ) {
      continue;
    }

    if (
      s.charCodeAt(i) >= 97 &&
      s.charCodeAt(i) <= 122 &&
      s.charCodeAt(i) - 32 === s.charCodeAt(i + 1)
    ) {
      continue;
    }

    res++;
  }
  return res;
};

// let answer = countKeyChanges("aAbBcC");
let answer = countKeyChanges("AaAaAaaA");
console.log(answer);
