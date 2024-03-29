/**
 * @param {string} long
 * @param {string} short
 * @returns {number}
 *
 * Time complexity O(n^2) Space complexity O(1)
 */
export function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
