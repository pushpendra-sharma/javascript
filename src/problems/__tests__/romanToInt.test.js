import { romanToInt } from "../romanToInt";

describe('romanToInt', () => {
  // Test Case 1: Your original test cases
  test('should convert basic single Roman numerals', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('X')).toBe(10);
    expect(romanToInt('L')).toBe(50);
    expect(romanToInt('C')).toBe(100);
    expect(romanToInt('D')).toBe(500);
    expect(romanToInt('M')).toBe(1000);
  });

  test('should convert subtraction cases correctly', () => {
    expect(romanToInt('IX')).toBe(9); // 10 - 1
    expect(romanToInt('IV')).toBe(4); // 5 - 1
    expect(romanToInt('XL')).toBe(40); // 50 - 10
    expect(romanToInt('XC')).toBe(90); // 100 - 10
    expect(romanToInt('CD')).toBe(400); // 500 - 100
    expect(romanToInt('CM')).toBe(900); // 1000 - 100
  });

  test('should convert your specific test cases', () => {
    expect(romanToInt('I')).toBe(1);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('XLVI')).toBe(46);
    expect(romanToInt('XV')).toBe(15);
    expect(romanToInt('LXXVI')).toBe(76);
    expect(romanToInt('XCVII')).toBe(97);
    expect(romanToInt('CDXCII')).toBe(492);
  });

  // Test Case 2: Simple addition cases (no subtraction)
  test('should convert simple addition cases', () => {
    expect(romanToInt('II')).toBe(2);
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('VI')).toBe(6); // 5 + 1
    expect(romanToInt('VII')).toBe(7); // 5 + 1 + 1
    expect(romanToInt('VIII')).toBe(8); // 5 + 1 + 1 + 1
    expect(romanToInt('XI')).toBe(11); // 10 + 1
    expect(romanToInt('XII')).toBe(12); // 10 + 1 + 1
    expect(romanToInt('XIII')).toBe(13); // 10 + 1 + 1 + 1
  });

  // Test Case 3: More complex combinations
  test('should convert complex Roman numerals', () => {
    expect(romanToInt('XIV')).toBe(14); // 10 + (5 - 1)
    expect(romanToInt('XVIII')).toBe(18); // 10 + 5 + 1 + 1 + 1
    expect(romanToInt('XIX')).toBe(19); // 10 + (10 - 1)
    expect(romanToInt('XX')).toBe(20); // 10 + 10
    expect(romanToInt('XXI')).toBe(21); // 10 + 10 + 1
  });

  // Test Case 4: Numbers with multiple subtractions
  test('should handle multiple subtraction patterns', () => {
    expect(romanToInt('XLIV')).toBe(44); // (50-10) + (5-1) = 40 + 4
    expect(romanToInt('XLIX')).toBe(49); // (50-10) + (10-1) = 40 + 9
    expect(romanToInt('CDXLIV')).toBe(444); // (500-100) + (50-10) + (5-1)
    expect(romanToInt('CMXC')).toBe(990); // (1000-100) + (100-10)
    expect(romanToInt('CMXCIX')).toBe(999); // (1000-100) + (100-10) + (10-1)
  });

  // Test Case 5: Larger numbers
  test('should convert larger Roman numerals', () => {
    expect(romanToInt('MCMLIV')).toBe(1954); // M + CM + L + IV = 1000 + 900 + 50 + 4
    expect(romanToInt('MCMXC')).toBe(1990); // M + CM + XC = 1000 + 900 + 90
    expect(romanToInt('MMCDXLIV')).toBe(2444); // MM + CD + XL + IV = 2000 + 400 + 40 + 4
    expect(romanToInt('MMMCMXCIX')).toBe(3999); // Maximum valid Roman numeral
  });

  // Test Case 6: Edge cases and boundary values
  test('should handle edge cases', () => {
    expect(romanToInt('MCDXLIV')).toBe(1444); // M + CD + XL + IV
    expect(romanToInt('DCCCXC')).toBe(890); // D + CCC + XC
    expect(romanToInt('CCCXL')).toBe(340); // CCC + XL
    expect(romanToInt('LXXXIX')).toBe(89); // L + XXX + IX
  });

  // Test Case 7: Consecutive same numerals
  test('should handle consecutive same numerals', () => {
    expect(romanToInt('MMM')).toBe(3000); // 1000 + 1000 + 1000
    expect(romanToInt('CCC')).toBe(300); // 100 + 100 + 100
    expect(romanToInt('XXX')).toBe(30); // 10 + 10 + 10
    expect(romanToInt('III')).toBe(3); // 1 + 1 + 1
  });

  // Test Case 8: Mixed patterns
  test('should handle mixed addition and subtraction patterns', () => {
    expect(romanToInt('MCDXLIV')).toBe(1444);
    expect(romanToInt('DCCCLXXXIX')).toBe(889);
    expect(romanToInt('MMMDCCCLXXXVIII')).toBe(3888);
  });

  // Test Case 9: Return type validation
  test('should return correct data type', () => {
    const result = romanToInt('XV');
    expect(typeof result).toBe('number');
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThan(0);
  });
});
