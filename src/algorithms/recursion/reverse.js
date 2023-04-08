/**
 * @param {*[]} array
 * @param {number} start
 * @param {number} end
 * @returns {*[]}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function reverseArray(array, start, end) {
  if (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    return reverseArray(array, start + 1, end - 1);
  }

  return array;
}

/**
 * @param {string} str
 * @returns {string}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function reverseString(str) {
  if (str.length === 0) {
    return '';
  }
  let reverseStr = str[str.length - 1];

  return reverseStr + reverseString(str.slice(0, str.length - 1));
}
