/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let max = -Infinity;
  for (let i = 0; i < num.length - 2; i++) {
    let threeDigits = num.substring(i, i + 3);
    if (isGood(threeDigits)) {
      max = Math.max(max, parseInt(threeDigits));
      i += 2;
    }
  }
  return max === -Infinity ? "" : max === 0 ? "000" : max.toString();
};

const isGood = (threeDigits) => {
  let set = new Set([...threeDigits]);
  return set.size === 1 ? true : false;
};

const answer = largestGoodInteger("6777133339");
console.log(answer);
