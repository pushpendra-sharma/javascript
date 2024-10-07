/* ================= Frequency Counter ======================*/

/**
 * Time Complexity - O(n)
 */
export function validAnagram(str1, str2) {
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

/**
 * Time Complexity - O(n)
 */
export function sameFrequency(n, m) {
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

/* Constraints: Time Complexity - O(n log n)  Space Complexity - O(1) */
export function areThereDuplicates(...rest) {
  let frequency = {};

  for (const item of rest) {
    // if frequency already > 0 then means duplicate, directly return true
    if (frequency[item]) return true;
    // else increment frequency
    else frequency[item] = (frequency[item] || 0) + 1;
  }

  return false;
}
