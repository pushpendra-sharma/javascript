/**
 * Write a function which accepts a sorted array of integers.
 * The function should find the first pair where the sum is zero.
 * Return an array that includes both values sum to zero
 * or undefined if a pair does not exist
 */

export function sumZero(sortedArray) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    const sum = sortedArray[leftPointer] + sortedArray[rightPointer];
    if (sum === 0) return [sortedArray[leftPointer], sortedArray[rightPointer]];
    else if (sum > 0) rightPointer--;
    else leftPointer++;
  }
}
