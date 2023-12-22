/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let res = [words[0]];

  for (let i = 1; i < words.length; i++) {
    let sorted_1 = words[i - 1].split("").sort().join("");
    let sorted_2 = words[i].split("").sort().join("");
    if (sorted_1 !== sorted_2) {
      res.push(words[i]);
    }
  }
  return res;
};

// let answer = removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]);
let answer = removeAnagrams(["a", "b", "c", "d", "e"]);
console.log(answer);
