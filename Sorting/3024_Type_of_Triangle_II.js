/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  //1.Output type of triangle using hashmap.
  let hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!hashmap.get(nums[i])) {
      hashmap.set(nums[i], 1);
    } else {
      hashmap.set(nums[i], hashmap.get(nums[i]) + 1);
    }
  }
  //   console.log(hashmap);
  let typeOfTriangle = "";
  for (let value of hashmap.values()) {
    if (value === 3) {
      typeOfTriangle = "equilateral";
    } else if (value === 2) {
      typeOfTriangle = "isosceles";
    }
  }
  if (typeOfTriangle === "") {
    typeOfTriangle = "scalene";
  }
  console.log(typeOfTriangle);

  //2.check if a triangle can be formed.
  if (typeOfTriangle === "equilateral") {
    return typeOfTriangle;
  } else {
    let sorted = nums.sort((a, b) => b - a);
    if (
      sorted[0] < sorted[1] + sorted[2] &&
      sorted[1] < sorted[0] + sorted[2] &&
      sorted[2] < sorted[0] + sorted[1]
    ) {
      return typeOfTriangle;
    } else {
      return "none";
    }
  }
};

let answer = triangleType([3, 3, 3]);
console.log(answer);
