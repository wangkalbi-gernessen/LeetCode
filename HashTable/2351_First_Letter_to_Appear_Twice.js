/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let set = new Set();
  let output = "";
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (!set.has(s[i])) {
      set.add(s[i]);
    } else {
      output = s[i];
      break;
    }
  }
  return output;
};

// let answer = repeatedCharacter("abccbaacz");
// let answer = repeatedCharacter("abcdd");
let answer = repeatedCharacter("eesll");
console.log(answer);
