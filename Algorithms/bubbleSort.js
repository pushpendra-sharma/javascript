// Time complexity O(n^2)    Space complexity O(1)
function bubbleSort(array) {
  // let noSwap = true;
  for (let i = array.length - 1; i >= 0; i--) {
    // noSwap = true;
    for (let j = 0; j < i; j++) {
      console.log(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        // noSwap = false;
      }
    }
    // if (noSwap) break;
  }
  return array;
}

console.log(bubbleSort([5, 7, 2, 4, 0, 1, 8, 9, 4]));
console.log(bubbleSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(bubbleSort([]));
