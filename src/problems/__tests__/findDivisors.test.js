import { findDivisorsBruteForce, findDivisorsOptimized } from '../findDivisors';

describe('find divisors', () => {
  it('should find divisors of given number', () => {
    expect(findDivisorsBruteForce(36)).toContain(1, 2, 3, 4, 6, 9, 12, 18, 36);
    expect(findDivisorsBruteForce(97)).toContain(1, 97);
  });

  it('should find divisors of given number', () => {
    expect(findDivisorsOptimized(36)).toContain(1, 2, 3, 4, 6, 9, 12, 18, 36);
    expect(findDivisorsOptimized(97)).toContain(1, 97);
  });
});
