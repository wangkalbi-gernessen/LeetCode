/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let count = 0;
  let substring = word;
  while (sequence.includes(substring)) {
    count++;
    substring += word;
  }

  return count;
};

// let answer = maxRepeating("ababc", "ab");
// let answer = maxRepeating("ababc", "ba");
let answer = maxRepeating("ababc", "ac");
console.log(answer);
