let bucketSort = (arr) => {
  let n = arr.length;
  if (n <= 0) {
    return;
  }

  let buckets = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  // put array elements in different buckets
  for (let i = 0; i < n; i++) {
    let idx = n * arr[i];
    let flr = Math.floor(idx);
    buckets[flr].push(arr[i]);
  }

  // sort indivisual buckets
  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }
  return buckets;
};

let answer = bucketSort([10, 4, 8, 2, 5, 6, 3, 1, 9]);
console.log(answer);
