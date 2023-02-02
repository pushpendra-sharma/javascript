// using recursion(slow) O(n)
function factorialByRecursion(n) {
  if (n < 2) return 1;
  else return n * factorialByRecursion(n - 1);
}

// O(n)
function factorial(n) {
  if (typeof n === 'number' && n >= 0) {
    let fact = 1;
    while (n > 1) {
      fact = fact * n;
      n = n - 1;
    }
    return fact;
  } else return 'Enter valid number.';
}

console.log(factorial(1));
console.log(factorialByRecursion(6));
