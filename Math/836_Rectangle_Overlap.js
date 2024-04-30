/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // Check if rec1 is to the left of rec2
  if (rec1[2] <= rec2[0]) {
    return false;
  }

  // Check if rec1 is below rec2
  if (rec1[3] <= rec2[1]) {
    return false;
  }

  // Check if rec1 is above rec2
  if (rec1[1] >= rec2[3]) {
    return false;
  }

  // Check if rec1 is to the right of rec2
  if (rec1[0] >= rec2[2]) {
    return false;
  }

  return true;
};

let answer = isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]);
console.log(answer);
