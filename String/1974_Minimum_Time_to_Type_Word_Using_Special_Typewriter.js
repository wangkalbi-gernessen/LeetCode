/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let current = "a";
  let res = 0;
  for (let char of word) {
    let diff = Math.abs(char.charCodeAt(0) - current.charCodeAt(0));
    // Move the pointer one character counterclockwise or clockwise
    if (diff > 13) {
      res += 26 - diff;
    } else {
      res += diff;
    }
    // Type the character the pointer is currently on
    res++;

    current = char;
  }
  return res;
};

let answer = minTimeToType("bza");
console.log(answer);
