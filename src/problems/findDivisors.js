/**
 * @param {number} num
 * @return {number[]}
 */

/**
 * Directly iterate over 1 to number
 *
 * Time complexity O(n)
 * Space complexity O(1)
 */
export function findDivisorsBruteForce(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
}

/**
 * For Example : 42 iterate upto square root of 42 => 6
 * then 3 is divisor so 42/3 = 14 is also divisor
 *
 * Time complexity O(sqrt(n))
 * Space complexity O(1)
 */
export function findDivisorsOptimized(num) {
  const divisors = [];
  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) divisors.push(i);
    if (i !== num / i) divisors.push(num / i);
  }

  return divisors;
}
