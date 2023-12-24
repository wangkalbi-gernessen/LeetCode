/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let res = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) {
      res++;
    }
  }
  return res;
};

let answer = numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
console.log(answer);
