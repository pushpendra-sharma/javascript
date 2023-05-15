import { memoizedFunc } from "../memoize";

test('memoizedFunc caches and returns correct results', () => {
  // Mock function
  const mockFunction = jest.fn((a, b) => a + b);
  const memoizedFunction = memoizedFunc(mockFunction);

  // First call
  const result1 = memoizedFunction(2, 3);
  expect(result1).toBe(5);
  expect(mockFunction).toHaveBeenCalledTimes(1);

  // Second call with same arguments
  const result2 = memoizedFunction(2, 3);
  expect(result2).toBe(5);
  expect(mockFunction).toHaveBeenCalledTimes(1); // Cached result, function not called again

  // Third call with different arguments
  const result3 = memoizedFunction(4, 5);
  expect(result3).toBe(9);
  expect(mockFunction).toHaveBeenCalledTimes(2); // Different arguments, function called again
});
