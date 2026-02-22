/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function (n) {
  const hexadecimal = Math.pow(n, 2)
    .toString(16)
    .split("")
    .map((l) => {
      if (typeof l !== "number") {
        return l.toUpperCase();
      }
    })
    .join("");
  const hexatrigesimal = Math.pow(n, 3)
    .toString(36)
    .split("")
    .map((l) => {
      if (typeof l !== "number") {
        return l.toUpperCase();
      }
    })
    .join("");

  // console.log(hexadecimal);
  // console.log(hexatrigesimal);

  return hexadecimal + hexatrigesimal;
};

const n = 13;
console.log(concatHex36(n));
