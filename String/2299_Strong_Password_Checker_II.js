/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  let n = password.length;
  if (n < 8) {
    return false;
  }

  if (/[0-9]/g.test(password) === false) {
    return false;
  }

  if (/[A-Z]/g.test(password) === false) {
    return false;
  }

  if (/[a-z]/g.test(password) === false) {
    return false;
  }
  if (/[@#$%^&*()+!-]/g.test(password) === false) {
    return false;
  }

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      return false;
    }
  }

  return true;
};

// let answer = strongPasswordCheckerII("IloveLe3tcode!");
// let answer = strongPasswordCheckerII("Me+You--IsMyDream");
// let answer = strongPasswordCheckerII("MeYouIsMyDream55!");
let answer = strongPasswordCheckerII("-Aa1a1a1");
console.log(answer);
