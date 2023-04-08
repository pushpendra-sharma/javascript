/**
 * @param {number} num
 * @returns {number}
 *
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function sumOfNaturalNumbersUptoN(num) {
  if (num === 1) return 1;

  return num + sumOfNaturalNumbersUptoN(num - 1);
}

/**
 * @param {number} base
 * @param {number} exp
 * @returns {number}
 *
 * Time Complexity - O(n/2)
 * Space Complexity - O(1)
 */
export function power(base, exp) {
  if (exp === 0) return 1;

  const pow = Math.abs(exp);
  const result =
    pow % 2 === 0
      ? power(base * base, pow / 2)
      : base * power(base * base, (pow - 1) / 2);

  return exp < 0 ? 1 / result : result;
}

/**
 * @param {number} n
 * @return {number}
 *
 * Time Complexity - O(2^n)
 * Space Complexity - O(1)
 */
export function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
