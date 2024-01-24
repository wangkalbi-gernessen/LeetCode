/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let totalLines = 1;
  let widthLastLine = 0;
  let pixels = 0;
  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - 97;
    pixels += widths[index];

    if (pixels > 100) {
      pixels = widths[index];
      totalLines++;
    }
  }
  return [totalLines, pixels];
};

let answer = numberOfLines(
  [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ],
  "abcdefghijklmnopqrstuvwxyz"
);
console.log(answer);
