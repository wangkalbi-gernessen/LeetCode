/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = function (hours, target) {
  let answer = 0;
  for (let hour of hours) {
    if (hour >= target) {
      answer += 1;
    }
  }
  return answer;
};

const hours = [0, 1, 2, 3, 4];
const target = 2;
console.log(numberOfEmployeesWhoMetTarget(hours, target));
