const uniqueMaximumNumber = (array) => {
  let hashmap = new Map();
  for (let num of array) {
    if (hashmap.has(num)) {
      hashmap.set(num, hashmap.get(num) + 1);
    } else {
      hashmap.set(num, 1);
    }
  }
  //   console.log(hashmap);
  let maxKey = -1;
  for (let [key, value] of hashmap) {
    if (value === 1) {
      if (maxKey < key) {
        maxKey = key;
      }
    }
  }
  return maxKey;
};

// let answer = uniqueMaximumNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]);
let answer = uniqueMaximumNumber([9, 9, 8, 8]);
console.log(answer);
