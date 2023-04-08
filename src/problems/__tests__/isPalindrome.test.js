import { isPalindromeNumber, isPalindromeString } from '../isPalindrome';

describe('check for palindrome', () => {
  it('should return true if string is palindrome', () => {
    expect(isPalindromeString('awesome')).toBeFalsy();
    expect(isPalindromeString('foobar')).toBeFalsy();
    expect(isPalindromeString('tacocat')).toBeTruthy();
    expect(isPalindromeString('abcddcba')).toBeTruthy();
    expect(isPalindromeString('amanaplanacanalpanama')).toBeTruthy();
  });

  it('should return true if number is palindrome', () => {
    expect(isPalindromeNumber(2)).toBeTruthy();
    expect(isPalindromeNumber(323)).toBeTruthy();
    expect(isPalindromeNumber(52325)).toBeTruthy();
    expect(isPalindromeNumber(7)).toBeTruthy();
    expect(isPalindromeNumber(19)).toBeFalsy();
    expect(isPalindromeNumber(79)).toBeFalsy();
    expect(isPalindromeNumber(12)).toBeFalsy();
  });
});
