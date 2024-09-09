/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  let arr = s.split("").map((num) => parseInt(num));
  //   console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) ||
      (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)
    ) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        break;
      }
    }
  }
  return arr.join("");
};

let answer = getSmallestString("45320");
console.log(answer);
