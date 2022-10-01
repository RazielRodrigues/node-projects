function findMin(array) {
    let min = Infinity;
    for (const item of array) {
      min = Math.min(min, item);
    }
    return min;
  }
  findMin([5, 2, 1, 4]); // => 1
  