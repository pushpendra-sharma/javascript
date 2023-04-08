/**
 * @param {string} str
 * @return {boolean}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function isPalindromeString(str) {
  if (str.length < 2) return true;

  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];

  if (firstLetter === lastLetter)
    return isPalindromeString(str.slice(1, str.length - 1));

  return false;
}

/**
 * @param {number} x
 * @return {boolean}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function isPalindromeNumber(x) {
  if (x < 0) return false;

  let num = x;
  let reverseNumber = 0;

  while (num !== 0) {
    let digit = num % 10;
    reverseNumber = reverseNumber * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reverseNumber === x;
}
