/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  let arr = [];
  for (let word of words) {
    let split = word.split(separator);
    // console.log(split);
    arr.push(split);
  }

  let res = arr.flat().filter((item) => item !== "");
  return res;
};

// let answer = splitWordsBySeparator(["one.two.three", "four.five", "six"], ".");
// let answer = splitWordsBySeparator(["$easy$", "$problem$"], "$");
let answer = splitWordsBySeparator(["|||"], "|");
console.log(answer);
