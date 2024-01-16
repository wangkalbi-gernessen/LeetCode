/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let hashmap = new Map();
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        hashmap.set(list1[i], i + j);
      }
    }
  }
  //   console.log(hashmap);
  let min = Math.min(...hashmap.values());
  //   console.log(min);
  let res = [];
  for (let [key, value] of hashmap) {
    if (value === min) {
      res.push(key);
    }
  }
  return res;
};

let answer = findRestaurant(
  ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
);
console.log(answer);
