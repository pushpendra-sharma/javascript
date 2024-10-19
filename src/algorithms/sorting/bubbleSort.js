function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 * Time complexity O(n^2)
 * Space complexity O(1)
 */
function bubbleSort(array) {
  // let iterations = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(array[j], array[j + 1]);
      // iterations++;

      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  // console.log('iterations', iterations);
  // Iterations are 36, 55

  return array;
}

/** This implementation does more iterations, i.e less optimized */
function bubbleSort2(array) {
  // let iterations = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      // iterations++;
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  // console.log('iterations', iterations);
  // Iterations are 44, 65;

  return array;
}

console.log(bubbleSort2([5, 7, 2, 4, 0, 1, 8, 9, 4]));
console.log(bubbleSort2([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
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
