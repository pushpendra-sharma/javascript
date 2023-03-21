import {
  areThereDuplicates,
  averagePair,
  countUniqueValues,
  isSubsequence,
} from '../multiplePointers';

describe('frequencyCounter', () => {
  it('should count unique values', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7); 
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

  it('should check if there are duplicates', () => {
    expect(areThereDuplicates(1, 2, 3, 1, 5)).toBeTruthy();
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
  });

  it('should check for a pair with given average', () => {
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
  });

  it('should check if string is subsequence of given string', () => {
    expect(isSubsequence('hello', 'hello world')).toBeTruthy();
    expect(isSubsequence('sing', 'sting')).toBeTruthy();
    expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
    expect(isSubsequence('abc', 'acb')).toBeFalsy();
  });
});
