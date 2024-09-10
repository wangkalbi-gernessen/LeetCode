/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  let dateBinary = date
    .split("-")
    .map((str) => parseInt(str))
    .map((digits) => digits.toString(2));
  //   console.log(dateBinary);
  return dateBinary.join("-");
};

let answer = convertDateToBinary("2080-02-29");
console.log(answer);
