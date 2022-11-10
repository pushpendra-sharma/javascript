// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse.

function reverse(str) {
  if (str.length === 0) {
    return '';
  }
  let reverseString = str[str.length - 1];

  return reverseString + reverse(str.slice(0, str.length - 1));
}

reverse('awesome'); // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'

// ========================================================================================

// Write a recursive function called isPalindrome which returns true if the string passed
// to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) {
    return true;
  }

  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];

  if (firstLetter === lastLetter) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

console.log(':::awesome', isPalindrome('awesome')); // false
console.log(':::foobar', isPalindrome('foobar')); // false
console.log(':::tacocat', isPalindrome('tacocat')); // true
console.log(':::abcddcba', isPalindrome('abcddcba')); // true
console.log(':::amanaplanacanalpanama', isPalindrome('amanaplanacanalpanama')); // true
console.log(
  ':::amanaplanacanalpandemonium',
  isPalindrome('amanaplanacanalpandemonium')
); // false

// ======================================================================================

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

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

// =================================================================================

// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

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
