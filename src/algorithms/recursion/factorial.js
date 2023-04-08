/**
 * @param {number} n
 * @returns {number}
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function factorialByRecursion(n) {
  if (n < 2) return 1;
  else return n * factorialByRecursion(n - 1);
}

/**
 * @param {number} n
 * @returns {number}
 * 
 * Time Complexity - O(n) 
 * Space Complexity - O(1) 
*/
export function factorialByIteration(n) {
  if (n < 1) return 1;

  let fact = 1;
  while (n > 1) {
    fact = fact * n;
    n = n - 1;
  }
  return fact;
}
