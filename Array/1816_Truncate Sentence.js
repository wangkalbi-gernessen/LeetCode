/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  const arr = s.split(" ");
  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(arr[i]);
  }

  return answer.join(" ");
};

const sentence = "Hello how are you Contestant";
const numberOfWords = 4;
console.log(sentence, numberOfWords);
