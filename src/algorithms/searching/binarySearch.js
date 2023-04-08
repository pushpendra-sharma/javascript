/**
 * @param {*[]} array
 * @param {*} target
 * @returns {number}
 *
 * Time complexity O(logn)
 * Space complexity O(1)
 */
export function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let i = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[i] === target) {
      return i;
    }
    if (array[i] > target) {
      right = i - 1;
    } else {
      left = i + 1;
    }
    i = Math.floor((left + right) / 2);
  }

  return -1;
}
