/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function (n) {
  const nonZero = parseInt(
    n
      .toString()
      .split("")
      .filter((num) => parseInt(num) !== 0)
      .join("")
  );
  return nonZero;
};

const n = 1020030;
console.log(removeZeros(n));
