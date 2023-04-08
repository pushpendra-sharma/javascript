/**
 * Write a recursive function called someRecursive
 * which accepts an array and a callback.
 * The function returns true if a single value in
 * the array returns true when passed to the callback.
 * Otherwise it returns false.
 */

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(array, callback) {
  if (array.length === 0) {
    return false;
  }
  if (callback(array[0])) {
    return true;
  }
  return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

/**
 * Write a recursive function called flatten which
 * accepts an array of arrays and returns a new array
 * with all values flattened.
 */

function flatten(array) {
  // working but not good!

  let result = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
