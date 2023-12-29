var numberOfDays = function (year, month) {
  return new Date(year, month, 0).getDate();
};

let answer = numberOfDays(2020, 1);
console.log(answer);
