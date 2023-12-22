/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  let lowercased = s.toLowerCase();
  let onlyLetters = lowercased.replace(/[^A-Za-z0-9]/g, "");
  console.log(onlyLetters);

  return onlyLetters === onlyLetters.split("").reverse().join("");
};

// let answer = isPalindrome("A man, a plan, a canal: Panama");
let answer = isPalindrome("Race a cAr");
console.log(answer);

// var isPalindrome = function (s) {
//   // converting all uppercase letters into lowercase letters
//   let lowercased_letter = s.toLowerCase();
//   //   console.log(lowercased_letter);
//   //   removing all non-alphanumeric characters
//   let onlyLetters = lowercased_letter.replace(/[^A-Za-z0-9]/g, "");
//   console.log(onlyLetters);

//   // check if a string is palindrome
//   let firstLetter = 0;
//   let lastLetter = onlyLetters.length - 1;

//   while (lastLetter > firstLetter) {
//     if (onlyLetters[firstLetter++] !== onlyLetters[lastLetter--]) {
//       return false;
//     }
//   }
//   return true;
// };

// // let answer = isPalindrome("A man, a plan, a canal: Panama");
// let answer = isPalindrome("race a car");
// console.log(answer);
