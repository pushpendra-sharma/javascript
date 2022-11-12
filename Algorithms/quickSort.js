function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/* 
arrange the elements less than pivot to left and grater then pivot to right
does not create new array

return the index of pivotElement
*/

function pivotFn(array, start = 0, end = array.length - 1) {
  let pivotElement = array[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotElement > array[i]) {
      pivotIndex++;

      // swap currentElement with pivotIndexElement
      swap(array, pivotIndex, i);
    }
  }

  // swap pivotElement with pivotIndexElement
  swap(array, pivotIndex, start);

  return pivotIndex;
}

// Time complexity O(n^2)  Space complexity O(logn)
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivotFn(array, left, right);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort([7, 5, 2, 4]));
console.log(quickSort([5, 7, 2]));
console.log(quickSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(quickSort([]));
