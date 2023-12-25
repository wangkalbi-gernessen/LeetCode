/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let map = new Map();
  for (let i = 0; i < allowed.length; i++) {
    if (!map.has(allowed[i])) {
      map.set(allowed[i], 1);
    } else {
      map.set(allowed[i], map.get(allowed[i]) + 1);
    }
  }
  //   console.log(map);

  let res = 0;
  for (let j = 0; j < words.length; j++) {
    let word = words[j];
    res++;
    for (let char of word) {
      if (!map.has(char)) {
        res--;
        break;
      }
    }
  }
  return res;
};

let answer = countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);
console.log(answer);
