function getDigit(num, place = 0) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(n) {
  return n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1;
}

function mostDigits(numbersArray) {
  let maxDigits = 0;
  for (const n of numbersArray) {
    maxDigits = Math.max(maxDigits, digitCount(n));
  }

  return maxDigits;
}

// Time complexity - O(nk)    Space complexity - O(n+k) | n = array.length , k = number of digits of numbers
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (const n of nums) {
      const digit = getDigit(n, k);
      digitBuckets[digit].push(n);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([4567, 123, 52, 0, 7, 24, 789, 135754, 46]));
console.log(radixSort([8, 5, 2, 6, 9, 0, 1, 6, 4, 10, 13]));
console.log(radixSort([]));
