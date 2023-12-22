/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let ans = [];
  const KELVIN = celsius + 273.15;
  ans.push(KELVIN);
  const FAHRENHEIT = celsius * 1.8 + 32.0;
  ans.push(FAHRENHEIT);
  return ans;
};

let answer = convertTemperature(36.5);
console.log(answer);
