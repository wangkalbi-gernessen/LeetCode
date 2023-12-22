/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let array = s.split(" ");
  console.log(array);
  let output = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let matchNum = array[i].match(/\d/g);
    let str = matchNum.join("");
    console.log(str);
    output[str - 1] = array[i].replace(str, "");
    console.log(output);
  }
  return output.join(" ");
};

let answer = sortSentence("is2 sentence4 This1 a3");
console.log(answer);
