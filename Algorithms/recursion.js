// ============================ Recursion ===========================

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

// ==================================================================

function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(4)); // 24

// ==================================================================

// Time Complexity - O(2^n)
function fibonacci(n) {
  if (n < 3) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(4)); // 3
