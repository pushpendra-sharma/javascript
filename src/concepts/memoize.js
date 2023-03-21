const calc = n => (n * (n + 1)) / 2;

const memoizedFunc = fun => {
  let cache = {};

  return function (...args) {
    // console.log(args);

    let num = args[0];
    if (num in cache) {
      console.log(cache);
      return cache[num];
    } else {
      let result = fun(num);
      cache[num] = result;
      return result;
    }
  };
};

console.time();
const effFunc = memoizedFunc(calc);
console.log(effFunc(100000));
console.timeEnd();

console.time();
console.log(effFunc(100000));
console.timeEnd();
