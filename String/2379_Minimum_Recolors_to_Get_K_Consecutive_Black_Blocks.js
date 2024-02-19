/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let min = Infinity;
  for (let i = 0; i <= blocks.length - k; i++) {
    let windowString = blocks.substring(i, i + k);
    // console.log(windowString);
    let requiredWhites = windowString
      .split("")
      .reduce((sum, current) => (current === "W" ? sum + 1 : sum), 0);
    min = Math.min(min, requiredWhites);
  }
  return min;
};

let answer = minimumRecolors("WBBWWBBWBW", 7);
console.log(answer);
