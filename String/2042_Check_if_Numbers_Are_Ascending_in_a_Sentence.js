/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let onlyNumbersArray = s.split(" ").filter((word) => Number(word));
  //   console.log(onlyNumbersArray);
  for (let i = 1; i < onlyNumbersArray.length; i++) {
    if (!(Number(onlyNumbersArray[i - 1]) < Number(onlyNumbersArray[i]))) {
      return false;
    }
  }
  return true;
};

// let answer = areNumbersAscending(
//   "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// );
let answer = areNumbersAscending("hello world 5 x 5");
console.log(answer);
