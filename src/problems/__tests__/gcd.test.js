import { findGCDByEuclid, findGCDByLoop } from '../gcd';

describe('GCD, HCF, GCF', () => {
  it('should find GCD by Euclidean method', () => {
    expect(findGCDByEuclid(4, 5)).toBe(1);
    expect(findGCDByEuclid(4, 8)).toBe(4);
    expect(findGCDByEuclid(48, 13)).toBe(1);
    expect(findGCDByEuclid(4, 0)).toBe(4);
    expect(findGCDByEuclid(0, 0)).toBe(1);
  });

  it('should find GCD by iteration', () => {
    expect(findGCDByLoop(4, 5)).toBe(1);
    expect(findGCDByLoop(4, 8)).toBe(4);
    expect(findGCDByLoop(48, 13)).toBe(1);
    expect(findGCDByLoop(4, 0)).toBe(4);
    expect(findGCDByLoop(0, 0)).toBe(1);
  });
});
