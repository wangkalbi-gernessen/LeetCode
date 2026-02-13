/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
  let sets = new Set();
  for (let char of s) {
    sets.add(char);
  }
  return sets.size;
};

const s = "aaaa";
