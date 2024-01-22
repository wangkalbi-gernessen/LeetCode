/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let digitOccurenceTimes = number
    .split("")
    .reduce(
      (accumlator, num) => (num === digit ? accumlator + 1 : accumlator),
      0
    );
  //   console.log(digitOccurenceTimes);
  let i = 1;
  let nums = [];
  let startIndex = 0;
  let max = 0;
  while (i <= digitOccurenceTimes) {
    let firstIndex = number.indexOf(digit, startIndex);
    let filtered = number
      .split("")
      .filter((currentValue, index) => index !== firstIndex)
      .join("");

    if (max < BigInt(filtered)) {
      max = BigInt(filtered);
    }

    startIndex = firstIndex + 1;
    i++;
  }
  //   console.log(max);
  return max.toString();
};

// let answer = removeDigit("1231", "1");
let answer = removeDigit(
  "2918247756338836829948259212259612948986573547572133445495998236287245768816987491842618661",
  "9"
);
console.log(answer);
