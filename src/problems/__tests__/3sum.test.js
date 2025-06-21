import { threeSum } from '../3sum';

describe('threeSum', () => {
  test('should return correct triplets for example 1', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test('should return empty array when no triplets sum to zero', () => {
    const nums = [0, 1, 1];
    const result = threeSum(nums);

    expect(result).toEqual([]);
  });

  test('should return single triplet for all zeros', () => {
    const nums = [0, 0, 0];
    const result = threeSum(nums);

    expect(result).toEqual([[0, 0, 0]]);
  });

  test('should return empty array for array with less than 3 elements', () => {
    expect(threeSum([])).toEqual([]);
    expect(threeSum([1])).toEqual([]);
    expect(threeSum([1, 2])).toEqual([]);
  });

  test('should handle array with exactly 3 elements that sum to zero', () => {
    const nums = [-1, 0, 1];
    const result = threeSum(nums);

    expect(result).toEqual([[-1, 0, 1]]);
  });

  test('should handle array with exactly 3 elements that do not sum to zero', () => {
    const nums = [1, 2, 3];
    const result = threeSum(nums);

    expect(result).toEqual([]);
  });

  test('should handle negative numbers only', () => {
    const nums = [-3, -2, -1];
    const result = threeSum(nums);

    expect(result).toEqual([]);
  });

  test('should handle positive numbers only', () => {
    const nums = [1, 2, 3];
    const result = threeSum(nums);

    expect(result).toEqual([]);
  });

  test('should avoid duplicate triplets', () => {
    const nums = [-1, 0, 1, 2, -1, -4, -1, 0, 1];
    const result = threeSum(nums);

    // Should not contain duplicate triplets
    const uniqueTriplets = new Set(
      result.map(triplet => JSON.stringify(triplet.sort()))
    );
    expect(uniqueTriplets.size).toBe(result.length);
  });

  test('should handle large array with multiple valid triplets', () => {
    const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
    const result = threeSum(nums);

    expect(result.length).toBeGreaterThan(0);
    // Verify each triplet sums to zero
    result.forEach(triplet => {
      expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
    });
  });

  test('should handle array with many duplicates', () => {
    const nums = [0, 0, 0, 0, 0];
    const result = threeSum(nums);

    expect(result).toEqual([[0, 0, 0]]);
  });

  test('should handle mixed positive, negative, and zero values', () => {
    const nums = [-2, 0, 1, 1, 2];
    const result = threeSum(nums);
    expect(result).toHaveLength(2);
    console.log('::: result', result);
    expect(result).toEqual(
      expect.arrayContaining([
        [-2, 0, 2],
        [-2, 1, 1],
      ])
    );
  });

  test('should maintain order independence', () => {
    const nums1 = [-1, 0, 1, 2, -1, -4];
    const nums2 = [2, -4, -1, 1, 0, -1];

    const result1 = threeSum(nums1);
    const result2 = threeSum(nums2);

    // Sort both results for comparison
    const sortedResult1 = result1.map(triplet => triplet.sort()).sort();
    const sortedResult2 = result2.map(triplet => triplet.sort()).sort();

    expect(sortedResult1).toEqual(sortedResult2);
  });

  test('should handle edge case with single valid triplet', () => {
    const nums = [-1, 2, -1];
    const result = threeSum(nums);

    expect(result).toEqual([[-1, -1, 2]]);
  });

  test('should verify all triplets have unique indices', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);

    // This test ensures the algorithm doesn't reuse the same index
    // Since we can't directly test indices, we verify logical correctness
    result.forEach(triplet => {
      expect(triplet).toHaveLength(3);
      expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
    });
  });

  test('should handle performance with reasonable input size', () => {
    const nums = Array.from({ length: 100 }, (_, i) => i - 50);
    const start = Date.now();
    const result = threeSum(nums);
    const end = Date.now();

    // Should complete within reasonable time (1 second)
    expect(end - start).toBeLessThan(1000);

    // Verify correctness
    result.forEach(triplet => {
      expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
    });
  });
});
