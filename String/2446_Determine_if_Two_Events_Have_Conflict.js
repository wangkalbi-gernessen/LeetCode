/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  let event1_startTime = convertToMinute(event1[0]);
  let event1_endTime = convertToMinute(event1[1]);
  let event2_startTime = convertToMinute(event2[0]);
  let event2_endTime = convertToMinute(event2[1]);

  // Check if event1 endTime is not conflicted with event2 startTime
  if (event1_endTime < event2_startTime) {
    return false;
  }

  // Check if event2 endTime is not conflicted with event1 startTime
  if (event2_endTime < event1_startTime) {
    return false;
  }

  return true;
};

let convertToMinute = (event) => {
  let hours = Number(event[0] + event[1]);
  let minutes = Number(event[3] + event[4]);
  return hours * 60 + minutes;
};

let answer = haveConflict(["01:15", "02:00"], ["02:00", "03:00"]);
console.log(answer);
