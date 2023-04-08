import { fibonacci, power, sumOfNaturalNumbersUptoN } from '../math';

describe('math problems using recursion', () => {
  it('should find sum of a natural numbers upto n', () => {
    expect(sumOfNaturalNumbersUptoN(3)).toBe(6);
    expect(sumOfNaturalNumbersUptoN(4)).toBe(10);
  });

  it('should find power of base to the exp', () => {
    expect(power(2, 5)).toBe(32);
    expect(power(3, 3)).toBe(27);
    expect(power(1, -1)).toBe(1);
    expect(power(-2, -3)).toBe(-0.125);
  });

  it('should find fibonacci number', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });
});
