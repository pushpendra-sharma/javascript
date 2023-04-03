import { isPrime, isPrimeOptimized } from '../isPrime';

describe('Check for prime number', () => {
  it('should return true if number is prime', () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(19)).toBeTruthy();
    expect(isPrime(79)).toBeTruthy();

    expect(isPrime(12)).toBeFalsy();
  });

  it('should return true if number is prime', () => {
    expect(isPrimeOptimized(2)).toBeTruthy();
    expect(isPrimeOptimized(23)).toBeTruthy();
    expect(isPrimeOptimized(5)).toBeTruthy();
    expect(isPrimeOptimized(7)).toBeTruthy();
    expect(isPrimeOptimized(19)).toBeTruthy();
    expect(isPrimeOptimized(79)).toBeTruthy();

    expect(isPrimeOptimized(12)).toBeFalsy();
  });
});
