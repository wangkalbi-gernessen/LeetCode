/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let digits = [];
  let letters = [];
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      letters.push(s[i]);
    } else {
      digits.push(s[i]);
    }
  }
  console.log(digits);
  console.log(letters);

  let output = "";

  if (!digits.length || !letters.length) {
    return output;
  }

  while (digits.length || letters.length) {
    if (digits.length > letters.length) {
      output += digits.shift();
      output += letters.shift();
    } else {
      output += letters.shift();
      output += digits.shift();
    }
  }
  return output;
};

// let answer = reformat("a0b1c2");
// let answer = reformat("aaaa");
let answer = reformat("covid2019");
console.log(answer);
