// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) {
    return [];
  }
  const firstElement = array[0].charAt(0).toUpperCase() + array[0].slice(1);

  if (array.length === 1) {
    return [firstElement];
  }

  return [firstElement].concat(capitalizeFirst(array.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst([]));

// ========================================================================

// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;

  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

// ===============================================================================

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) {
    return [];
  }
  const firstElement = array[0].toUpperCase();

  if (array.length === 1) {
    return [firstElement];
  }

  return [firstElement].concat(capitalizeWords(array.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizeWords([])); // []

// =================================================================================

// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

let myObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  const arr = Object.keys(obj);
  const newObj = {};

  for (const key of arr) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

stringifyNumbers(myObj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// =================================================================================
// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let result = [];

  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(collectStrings(obj[key]));
    }
  }
  s;

  return result;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
