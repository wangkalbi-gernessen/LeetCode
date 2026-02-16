/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function (s) {
  let res = s.split("").map((num) => parseInt(num));
  // console.log(res);
  for (let i = s.length - 1; i >= 0; i--) {
    if (res[i] % 2 === 0) {
      break;
    }

    res.pop();
  }

  return res.join("");
};

const s = "1112";
console.log(largestEven(s));
