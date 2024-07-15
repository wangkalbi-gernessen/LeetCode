var MyHashMap = function () {
  this.hashmap = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.hashmap.set(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.hashmap.get(key) ?? -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  this.hashmap.delete(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

let obj = new MyHashMap();
let ops = [
  "MyHashMap",
  "put",
  "put",
  "get",
  "get",
  "put",
  "get",
  "remove",
  "get",
];
let nums = [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]];
let output = [null];

for (let i = 1; i < ops.length; i++) {
  if (ops[i] === "put") {
    obj.put(nums[i][0], nums[i][1]);
    output.push(null);
  } else if (ops[i] === "get") {
    let value = obj.get(nums[i][0]);
    output.push(value);
  } else {
    obj.remove(nums[i][0]);
    output.push(null);
  }
}

console.log(output);
