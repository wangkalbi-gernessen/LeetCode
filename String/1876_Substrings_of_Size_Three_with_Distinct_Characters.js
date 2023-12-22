/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let substringArray = [];
  for (let i = 0; i < s.length; i++) {
    let substring = "";
    for (let j = i; j < s.length; j++) {
      substring += s.charAt(j);
      substringArray.push(substring);
    }
  }
  console.log(substringArray);

  let count = 0;

  for (let i = 0; i < substringArray.length; i++) {
    if (substringArray[i].length === 3) {
      let exists = new Set();
      for (let j = 0; j < substringArray[i].length; j++) {
        if (!exists.has(substringArray[i][j])) {
          exists.add(substringArray[i][j]);
        }
      }

      if (exists.size === 3) {
        count += 1;
      }
    }
  }
  return count;
};

let answer = countGoodSubstrings("xyzzaz");
console.log(answer);
