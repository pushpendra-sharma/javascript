// leetcode https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // subtraction cases
  // IV IX XL XC CD CM

  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      i > 0 &&
      ((s[i - 1] === 'I' && (s[i] === 'V' || s[i] === 'X')) ||
        (s[i - 1] === 'X' && (s[i] === 'L' || s[i] === 'C')) ||
        (s[i - 1] === 'C' && (s[i] === 'D' || s[i] === 'M')))
    ) {
      integer = integer + romanValues[s[i]] - 2 * romanValues[s[i - 1]];
    } else {
      integer = integer + romanValues[s[i]];
    }
  }
  return integer;
};

console.log('Expected: 1,    Actual:', romanToInt('I'));
console.log('Expected: 9,    Actual:', romanToInt('IX'));
console.log('Expected: 46,   Actual:', romanToInt('XLVI'));
console.log('Expected: 15,   Actual:', romanToInt('XV'));
console.log('Expected: 76,   Actual:', romanToInt('LXXVI'));
console.log('Expected: 97,   Actual:', romanToInt('XCVII'));
console.log('Expected: 492,  Actual:', romanToInt('CDXCII'));
