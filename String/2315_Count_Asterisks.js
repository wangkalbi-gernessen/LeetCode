/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let arr = s.split("|");
  // console.log(arr);
  let asterisks = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      asterisks += arr[i]
        .split("")
        .reduce((a, b) => (b === "*" ? a + 1 : a), 0);
    } else {
      continue;
    }
  }
  return asterisks;
};

let answer = countAsterisks("l|*e*et|c**o|*de|");
console.log(answer);
