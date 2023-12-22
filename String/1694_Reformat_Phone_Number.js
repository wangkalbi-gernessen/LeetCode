/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let withoutSymbolNums = number.replace(/ /g, "").replace(/-/g, "").split("");
  console.log(withoutSymbolNums);
  let digitIndex = 0;
  let leftLength = withoutSymbolNums.length;

  while (leftLength > 0) {
    if (leftLength === 2 || leftLength === 3) {
      break;
    } else if (leftLength === 4) {
      digitIndex += 2;
      leftLength -= 2;
      withoutSymbolNums.splice(digitIndex, 0, "-");
    } else {
      digitIndex += 3;
      leftLength -= 3;
      withoutSymbolNums.splice(digitIndex, 0, "-");
      digitIndex++;
    }
  }
  return withoutSymbolNums.join("");
};

// let answer = reformatNumber("1-23-45 6")
let answer = reformatNumber("123 4");
// let answer = reformatNumber("12-3-569-87-12");
console.log(answer);
