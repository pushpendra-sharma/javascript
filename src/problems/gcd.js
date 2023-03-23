/**
 * Time Complexity - 
 * Space Complexity - O(1)
 */
export function findGCDByEuclid(num1, num2) {
  if (num1 === 0 && num2 === 0) return 1;

  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  if (min === 0) return max;

  const remainder = max % min;

  return findGCDByEuclid(min, remainder);
}

/**
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function findGCDByLoop(num1, num2) {
  if (num1 === 0 && num2 === 0) return 1;

  const min = Math.min(num1, num2);
  if (min === 0) return Math.max(num1,num2);

  let gcd = 1;

  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
}
