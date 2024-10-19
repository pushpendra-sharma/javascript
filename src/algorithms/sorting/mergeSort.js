/** To merge 2 sorted arrays
 * Time ecomplexity O(n+m)
 * Space ecomplexity O(n+m)
 */
function merge(arr1, arr2) {
  const array = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    array.push(arr2[j]);
    j++;
  }

  return array;
}

/**
 * Time complexity O(nlogn)
 * Space complexity O(n)
 */
function mergeSort(array) {
  if (array.length <= 1) return array;

  const i = Math.floor(array.length / 2);
  const arr1 = mergeSort(array.slice(0, i));
  const arr2 = mergeSort(array.slice(i));

  return merge(arr1, arr2);
}

console.log(mergeSort([7, 5, 2, 4]));
console.log(mergeSort([5, 7, 2]));
console.log(mergeSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(mergeSort([]));
