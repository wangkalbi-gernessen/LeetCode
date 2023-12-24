/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  //   if (word.length === 1) {
  //     return true;
  //   }

  let first = 0;
  let last = word.length - 1;
  let type;

  if (word[first].charCodeAt(0) >= 65 && word[first].charCodeAt(0) <= 90) {
    if (word[last].charCodeAt(0) >= 65 && word[last].charCodeAt(0) <= 90) {
      type = "A";
    } else {
      type = "B";
    }
  } else if (
    word[first].charCodeAt(0) >= 97 &&
    word[first].charCodeAt(0) <= 122 &&
    word[last].charCodeAt(0) >= 97 &&
    word[last].charCodeAt(0) <= 122
  ) {
    type = "C";
  } else {
    return false;
  }

  let second = 1;
  let semiLast = word.length - 2;

  while (semiLast >= second) {
    if (
      word[semiLast] !== word[semiLast].toUpperCase() ||
      word[second] !== word[second].toUpperCase()
    ) {
      if (type === "A") {
        return false;
      }
    }

    if (
      word[semiLast] !== word[semiLast].toLowerCase() ||
      word[second] !== word[second].toLowerCase()
    ) {
      if (type === "C" || type === "B") {
        return false;
      }
    }
    semiLast--;
    second++;
  }
  return true;
};

// let answer = detectCapitalUse("FlaG");
// let answer = detectCapitalUse("USA");
// let answer = detectCapitalUse("GooTle");
let answer = detectCapitalUse("yrxxpzr");
console.log(answer);
