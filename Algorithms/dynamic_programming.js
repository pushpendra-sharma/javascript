// using memoization
// Time Complexity - O(n) Space Complexity - worse
function fibonacci_memo(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];

  let res = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo);
  memo[n] = res;
  return res;
}

// Time Complexity - O(2^n)
function fib(n) {
  if (n < 3) return 1;
  else return fib(n - 1) + fib(n - 2);
}

// tabulated version
// Time Complexity - O(n)
function fibo(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}

console.time();
console.log('::: with memo', fibonacci_memo(30));
console.timeEnd();

console.time();
console.log('::: without memo', fib(30));
console.timeEnd();

console.time();
console.log('::: tabulated', fibo(30));
console.timeEnd();
