/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
  // 1.Set the first ball holder to 0(child label number)
  let ballHolder = 0;
  // 2.Declare a variable named leftDirection(boolean)
  let isLeftDirected;
  // 2.Go on passing a ball to the next child until k seconds using for-loop
  for (let i = 0; i < k; i++) {
    if (ballHolder === n - 1) {
      isLeftDirected = false;
    }

    if (ballHolder === 0) {
      isLeftDirected = true;
    }

    if (isLeftDirected) {
      ballHolder++;
    } else {
      ballHolder--;
    }
  }
  return ballHolder;
};

let answer = numberOfChild(3, 5);
console.log(answer);
