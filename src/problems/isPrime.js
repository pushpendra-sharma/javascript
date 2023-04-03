/**
 * @param {number} num
 * @return {boolean}
 */

/**
 * Time complexity O(n)
 * Space complexity O(1)
 */
export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

/**
 * For Example : 19 iterate upto square root of 19 => 4
 * then check for remainder
 *
 * Time complexity O(sqrt(n))
 * Space complexity O(1)
 */
export function isPrimeOptimized(num) {
  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
