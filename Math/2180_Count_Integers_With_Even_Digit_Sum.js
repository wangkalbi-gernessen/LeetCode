/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let arr = [];
  while (num > 0) {
    let digitSum = num
      .toString()
      .split("")
      .reduce((accumlator, num) => accumlator + parseInt(num), 0);

    console.log(digitSum);
    if (digitSum % 2 === 0) {
      arr.push(digitSum);
    }
    num--;
  }

  return arr.length;
};

let answer = countEven(30);
console.log(answer);
