// Pick element and put it in sorted portion of array

// Time complexity O(n^2)    Space complexity O(1)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && currentElement < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentElement;
  }

  return array;
}

console.log(insertionSort([7, 5, 2, 4]));
console.log(insertionSort([5, 7, 2]));
console.log(insertionSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(insertionSort([]));
