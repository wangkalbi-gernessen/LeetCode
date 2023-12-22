/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  // 1. count the number of spaces
  let spaceCounts = [...text].reduce(
    (accumlator, char) => (char === " " ? accumlator + 1 : accumlator),
    0
  );
  console.log(spaceCounts);
  //   2. calculate equal spaces and extra space
  let wordArray = text
    .trim()
    .split(" ")
    .filter((item) => item !== "");
  let wordCounts = wordArray.length;

  console.log(wordCounts);
  let equalSpaces = isFinite(spaceCounts / (wordCounts - 1))
    ? spaceCounts / (wordCounts - 1)
    : 0;
  let extraSpeces = isFinite(spaceCounts % (wordCounts - 1))
    ? spaceCounts % (wordCounts - 1)
    : spaceCounts;

  console.log(equalSpaces);
  console.log(extraSpeces);

  //   3. output
  let output = "";
  for (let j = 0; j < wordArray.length; j++) {
    output += wordArray[j];
    if (j < wordArray.length - 1) {
      output += " ".repeat(equalSpaces);
    }
  }

  output += " ".repeat(extraSpeces);
  //   console.log(output.length);
  return output;
};

// let answer = reorderSpaces("  this   is  a sentence ");
// let answer = reorderSpaces(" practice   makes   perfect");
let answer = reorderSpaces("  hello");
console.log(answer);
