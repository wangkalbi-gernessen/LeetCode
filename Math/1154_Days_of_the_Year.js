/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const d = new Date(date);
  const year = d.getFullYear();
  //   console.log(year);
  const month = d.getMonth() + 1;
  //   console.log(month);
  const days = d.getDate() + 1;
  //   console.log(days);

  let monthIndex = 1;
  let res = 0;
  while (monthIndex <= month) {
    if (monthIndex === month) {
      res += days;
    } else {
      res += daysInMonth(year, monthIndex);
    }
    monthIndex++;
  }
  return res;
};

let daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// let answer = dayOfYear("2019-02-10");
let answer = dayOfYear("2019-01-09");
// let answer = dayOfYear("2019-04-21");
console.log(answer);
