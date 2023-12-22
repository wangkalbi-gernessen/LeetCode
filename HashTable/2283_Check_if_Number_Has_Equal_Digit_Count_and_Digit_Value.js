/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  let map = new Map();
  for (let i = 0; i < num.length; i++) {
    if (!map.has(num[i])) {
      map.set(num[i], 1);
    } else {
      map.set(num[i], map.get(num[i]) + 1);
    }
  }
  console.log(map);
  for (let j = 0; j < num.length; j++) {
    value = map.has(j.toString()) ? map.get(j.toString()) : 0;
    if (value !== Number(num[j])) {
      return false;
    }
  }
  return true;
};

let answer = digitCount("1210");
// let answer = digitCount("030");
console.log(answer);
