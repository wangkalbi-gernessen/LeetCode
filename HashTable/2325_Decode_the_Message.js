/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let hashmap = new Map();
  let charCode = 97;
  let keyWithoutBlank = key.replace(/ /g, "");
  for (let i = 0; i < keyWithoutBlank.length; i++) {
    if (!hashmap.has(keyWithoutBlank[i])) {
      hashmap.set(keyWithoutBlank[i], String.fromCharCode(charCode++));
    } else {
      continue;
    }
  }
  console.log(hashmap);

  let res = "";
  for (let j = 0; j < message.length; j++) {
    if (message[j] === " ") {
      res += " ";
    } else {
      res += hashmap.get(message[j]);
    }
  }
  return res;
};

let answer = decodeMessage(
  "the quick brown fox jumps over the lazy dog",
  "vkbs bs t suepuv"
);
console.log(answer);
