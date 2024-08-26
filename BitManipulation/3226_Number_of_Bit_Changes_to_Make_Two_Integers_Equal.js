/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  let binaryN = n.toString(2);
  let binaryK = k.toString(2);
  let maxLength = Math.max(binaryK.length, binaryN.length);
  binaryN = binaryN.padStart(maxLength, 0);
  binaryK = binaryK.padStart(maxLength, 0);

  let res = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === "1") {
      if (binaryK[i] === "0") {
        res++;
      }
    } else {
      if (binaryK[i] === "1") {
        res = -1;
        break;
      }
    }
  }
  return res;
};

let answer = minChanges(14, 13);
console.log(answer);
