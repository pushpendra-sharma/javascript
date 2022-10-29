function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Time complexity O(n^2)    Space complexity O(1)
function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(array[j], array[j + 1]);

      if (array[j] > array[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 7, 2, 4, 0, 1, 8, 9, 4]));
console.log(bubbleSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(bubbleSort([]));

// =========== Optimized BubbleSort with noSwaps ==========

function bubbleSortOptimized(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));
