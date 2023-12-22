/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let capitalizedTitle = title
    .toLowerCase()
    .split(" ")
    .map(
      (item) => item.charAt(0).toUpperCase() + item.substring(1, item.length)
    )
    .map((item) => (item.length <= 2 ? item.toLowerCase() : item))
    .join(" ");

  return capitalizedTitle;
};

// let answer = capitalizeTitle("capiTalIze tHe titLe");
let answer = capitalizeTitle("First leTTeR of EACH Word");
console.log(answer);
