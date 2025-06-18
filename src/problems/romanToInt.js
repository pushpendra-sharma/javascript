export function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

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
}
