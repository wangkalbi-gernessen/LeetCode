/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let over60sCount = 0;
  // console.log(over60sCount);
  for (let i = 0; i < details.length; i++) {
    // console.log(details[i].substring(11, 13));
    if (Number(details[i].substring(11, 13)) > 60) {
      over60sCount += 1;
    }
  }
  return over60sCount;
};

let answer = countSeniors([
  "7868190130M7522",
  "5303914400F9211",
  "9273338290F4010",
]);
console.log(answer);
