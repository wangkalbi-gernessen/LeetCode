/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  let dat1 = new Date(date1);
  let dat2 = new Date(date2);

  return Math.abs(
    Math.floor((dat2.getTime() - dat1.getTime()) / (24 * 3600 * 1000))
  );
};

let answer = daysBetweenDates("2019-06-29", "2019-12-31");
console.log(answer);
