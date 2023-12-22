/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  s = s.split(" ");
  //   console.log(s);
  let eachWordMaxLength = s.reduce(
    (accumlator, word) => (word.length > accumlator ? word.length : accumlator),
    0
  );
  let res = [];
  let horizontalIndex = 0;
  while (horizontalIndex < eachWordMaxLength) {
    let ele = "";
    let verticalIndex = 0;
    while (verticalIndex < s.length) {
      ele += s[verticalIndex][horizontalIndex]
        ? s[verticalIndex][horizontalIndex]
        : " ";
      verticalIndex++;
    }

    ele = ele.trimEnd();

    res.push(ele);
    horizontalIndex++;
  }
  return res;
};

// let answer = printVertically("I OFTEN GO TO JAPAN");
let answer = printVertically("HOW ARE YOU");
// let answer = printVertically("TO BE OR NOT TO BE");
console.log(answer);
