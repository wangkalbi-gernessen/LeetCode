/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let ngCount = 0;
  while (sandwiches.length > 0) {
    let sand = sandwiches[0];
    let stu = students[0];
    if (sand === stu) {
      sandwiches.shift();
      students.shift();
      ngCount = 0;
    } else {
      let leftP = students.shift();
      students.push(leftP);
      ngCount++;
    }

    if (ngCount === students.length) {
      break;
    }
  }
  return students.length;
};

// let answer = countStudents([1, 1, 0, 0], [0, 1, 0, 1]);
let answer = countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]);
console.log(answer);
