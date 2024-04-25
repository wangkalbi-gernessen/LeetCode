/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let hashset = new Set();
  for (let email of emails) {
    let atIndex = email.indexOf("@");
    let domain = email.substring(atIndex);
    let local;
    let plusSignIndex = email.indexOf("+");

    if (plusSignIndex !== -1) {
      local = email
        .slice(0, atIndex)
        .substring(0, plusSignIndex)
        .replaceAll(".", "");
    } else {
      local = email.slice(0, atIndex).replaceAll(".", "");
    }

    hashset.add(local + domain);
  }
  return hashset.size;
};

let answer = numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.email@leetcode.com",
]);
console.log(answer);
