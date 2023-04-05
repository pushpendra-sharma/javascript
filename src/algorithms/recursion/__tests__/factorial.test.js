import { factorialByIteration, factorialByRecursion } from '../factorial';

describe('factorial', () => {
    
  it('should find factorial of a number', () => {
    expect(factorialByRecursion(0)).toBe(1);
    expect(factorialByRecursion(4)).toBe(24);
    expect(factorialByRecursion(5)).toBe(120);
  });

  it('should find factorial of a number', () => {
    expect(factorialByIteration(0)).toBe(1);
    expect(factorialByIteration(4)).toBe(24);
    expect(factorialByIteration(5)).toBe(120);
  });
});
