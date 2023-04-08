/**
 * @param {*[]} array
 * @param {*} target
 * @returns {number}
 * 
 * Time complexity O(n)
 * Space complexity O(1)
 */
export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}
