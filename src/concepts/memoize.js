const calc = n => (n * (n + 1)) / 2;

/**
 * @param {Function} fn
 */
export function memoizedFunc(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

console.time();
const effFunc = memoizedFunc(calc);
console.log(effFunc(100000));
console.timeEnd();

console.time();
console.log(effFunc(100000));
console.timeEnd();
