/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length - 1; i++) {
    let set1 = new Set(words[i].split(""));
    for (let j = i + 1; j < words.length; j++) {
      let set2 = new Set(words[j].split(""));

      let sorted1 = [...set1].sort().toString();
      let sorted2 = [...set2].sort().toString();

      if (sorted1 === sorted2) {
        count++;
      }
    }
  }
  return count;
};

let answer = similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]);
console.log(answer);
