// ============================== Frequency Counter ============================

// Time Complexity - O(n)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequency = {};

  for (const letter of str1) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }

  for (const letter2 of str2) {
    if (!frequency[letter2]) {
      return false;
    }
    frequency[letter2] = frequency[letter2] - 1;
  }
  return true;
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true

// Time Complexity - O(n)
function sameFrequency(n, m) {
  const map = new Map();

  while (n > 0) {
    const digitN = n % 10;
    map.set(digitN, (map.get(digitN) || 0) + 1);
    n = Math.floor(n / 10);
  }

  while (m > 0) {
    const digitM = m % 10;
    if (!map.get(digitM)) {
      return false;
    }
    map.set(digitM, map.get(digitM) - 1);
    m = Math.floor(m / 10);
  }

  return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(22, 2)); // false showing true

// Constraints: Time Complexity - O(n log n)  Space Complexity - O(1)
function areThereDuplicates(...rest) {
  let frequency = {};

  for (const item of rest) {
    if (frequency[item]) {
      return true;
    } else {
      frequency[item] = (frequency[item] || 0) + 1;
    }
  }

  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
