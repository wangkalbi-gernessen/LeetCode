/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str;
  let array;
  let nonSpaceCount = 0;
  str = s.trim();
  array = str.split(" ");
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      nonSpaceCount = 0;
    }

    if (array[i] === "") {
      nonSpaceCount += 1;
    }

    if (nonSpaceCount > 0) {
      array.splice(i, 1);
      i--;
    }
  }
  console.log(array);
  let returnedStr = array.reverse().join(" ");
  return returnedStr;
};

// let answer = reverseWords("the sky is blue");
// let answer = reverseWords("  hello world  ");
let answer = reverseWords("a good example");
// let answer = reverseWords("a good    example  kawaguchi");
console.log(answer);
