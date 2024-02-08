/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  // check if poker
  let sameSuits = 0;
  for (let i = 0; i < suits.length - 1; i++) {
    if (suits[i] != suits[i + 1]) {
      break;
    }
    sameSuits++;
  }

  if (sameSuits === suits.length - 1) {
    return "Flush";
  }

  // search for other poker hands
  let hashmap = new Map();
  for (let j = 0; j < ranks.length; j++) {
    if (!hashmap.has(ranks[j])) {
      hashmap.set(ranks[j], 1);
    } else {
      hashmap.set(ranks[j], hashmap.get(ranks[j]) + 1);
    }
  }
  console.log(hashmap);
  let sorted = [...hashmap.values()].sort((a, b) => b - a);
  // console.log(sorted);
  for (let value of sorted) {
    if (value >= 3) {
      return "Three of a Kind";
    }

    if (value >= 2) {
      return "Pair";
    }
  }
  return "High Card";
};

// let answer = bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]);
let answer = bestHand([2, 1, 2, 1, 1], ["d", "b", "a", "a", "d"]);
console.log(answer);
