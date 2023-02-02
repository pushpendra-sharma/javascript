// Time complexity O(n^2)    Space complexity O(1)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexOfMinimum = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMinimum]) {
        indexOfMinimum = j;
      }
    }
    if (i !== indexOfMinimum)
      [array[i], array[indexOfMinimum]] = [array[indexOfMinimum], array[i]];
  }
  return array;
}

console.log(selectionSort([5, 7, 2, 4]));
console.log(selectionSort([5, 7, 2]));
console.log(selectionSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(selectionSort([]));
