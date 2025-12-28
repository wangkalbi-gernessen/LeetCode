/**
 * @param {string} s
 * @return {number}
 */
const maxFreqSum = function (s) {
  const vowels = "aiueo";
  const vowelsHashmap = new Map();
  const consonantsHashmap = new Map();

  for (const x of s) {
    if (vowels.includes(x)) {
      if (!vowelsHashmap.has(x)) {
        vowelsHashmap.set(x, 1);
      } else {
        vowelsHashmap.set(x, vowelsHashmap.get(x) + 1);
      }
    } else {
      if (!consonantsHashmap.has(x)) {
        consonantsHashmap.set(x, 1);
      } else {
        consonantsHashmap.set(x, consonantsHashmap.get(x) + 1);
      }
    }
  }

  let vowelsMaximumFrequency = 0;
  for (const y of vowelsHashmap.values()) {
    if (y > vowelsMaximumFrequency) {
      vowelsMaximumFrequency = y;
    }
  }

  let consonantsMaximumFrequency = 0;
  for (const z of consonantsHashmap.values()) {
    if (z > consonantsMaximumFrequency) {
      consonantsMaximumFrequency = z;
    }
  }

  return vowelsMaximumFrequency + consonantsMaximumFrequency;
};

const s = "successes";
console.log(maxFreqSum(s));
