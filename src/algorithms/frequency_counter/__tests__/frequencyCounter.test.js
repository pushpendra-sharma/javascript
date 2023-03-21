import {
  areThereDuplicates,
  sameFrequency,
  validAnagram,
} from '../frequencyCounter';

describe('frequencyCounter', () => {
  it('should check if strings are validAnagram', () => {
    expect(validAnagram('', '')).toBeTruthy();
    expect(validAnagram('aaz', 'zza')).toBeFalsy();
    expect(validAnagram('anagram', 'nagaram')).toBeTruthy();
    expect(validAnagram('rat', 'car')).toBeFalsy();
    expect(validAnagram('awesome', 'awesom')).toBeFalsy();
    expect(validAnagram('amanaplanacanalp', 'acanalmanpla')).toBeFalsy();
    expect(validAnagram('qwerty', 'qeywrt')).toBeTruthy();
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
  });

  it('should check if numbers have same frequency of digits', () => {
    expect(sameFrequency(182, 281)).toBeTruthy();
    expect(sameFrequency(34, 14)).toBeFalsy();
    expect(sameFrequency(3589578, 5879385)).toBeTruthy();
    expect(sameFrequency(22, 222)).toBeFalsy();
    expect(sameFrequency(22, 2)).toBeFalsy();
  });

  it('should return true if there are duplicate characters', () => {
    expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
    expect(areThereDuplicates(1, 2, 2)).toBeTruthy();
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBeTruthy();
  });
});
