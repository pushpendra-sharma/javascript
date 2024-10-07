/**
 * Write a function called same, which accepts 2 arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be same.
 */
export function same(array1, array2) {
  // if array length different then return false
  if (array1.length != array2.length) return false;

  const frequency1 = {};

  // store the frequency of sqaured numbers from array1
  for (const num1 of array1) {
    const squaredNumnum1 = num1 ** 2;
    frequency1[squaredNumnum1] = (frequency1[squaredNumnum1] || 0) + 1;
  }

  //   iterate over array2 numbers
  for (const num2 of array2) {
    // if there exist a number in arra2 that has no frequency, return false
    if (!frequency1[num2]) return false;
    // decrement frequency
    frequency1[num2] = frequency1[num2] - 1;
  }

  return true;
}
