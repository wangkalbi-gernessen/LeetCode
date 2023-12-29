/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let arr = sentence.split(" ").filter((item) => item !== "");
  // console.log(arr);
  let count = 0;
  let pattern = /[a-z!.,-]/g;
  let ngPattern = /[^0-9]/g;
  for (let i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i] === true && ngPattern.test(arr[i]) === true)) {
      console.log("matched");
    }
  }
};

// let answer = countValidWords("cat and  dog");
let answer = countValidWords("!this  1-s b8d!");
console.log(answer);

console.log(/[^0-9]/g.test("b8d"));
