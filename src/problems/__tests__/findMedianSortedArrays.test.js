import {
  findMedianSortedArrays,
  findMedianSortedArraysOptimized,
} from '../findMedianSortedArrays';

describe('findMedianSortedArrays', () => {
  // Test Case 1: Basic examples from problem description
  test('should find median when total length is odd', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test('should find median when total length is even', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  // Test Case 2: Edge cases with empty arrays
  test('should handle when first array is empty', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
    expect(findMedianSortedArrays([], [1, 2])).toBe(1.5);
    expect(findMedianSortedArrays([], [1, 2, 3])).toBe(2);
  });

  test('should handle when second array is empty', () => {
    expect(findMedianSortedArrays([1], [])).toBe(1);
    expect(findMedianSortedArrays([1, 2], [])).toBe(1.5);
    expect(findMedianSortedArrays([1, 2, 3], [])).toBe(2);
  });

  // Test Case 3: Arrays of different sizes
  test('should handle arrays of very different sizes', () => {
    expect(
      findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25])
    ).toBe(11);
    expect(findMedianSortedArrays([1], [2, 3, 4, 5, 6])).toBe(3.5);
    expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6])).toBe(3.5);
  });

  // Test Case 4: Arrays with same elements
  test('should handle arrays with duplicate elements', () => {
    expect(findMedianSortedArrays([1, 1, 1], [1, 1, 1])).toBe(1);
    expect(findMedianSortedArrays([1, 2, 2], [2, 3, 4])).toBe(2);
  });

  // Test Case 5: Single element arrays
  test('should handle single element arrays', () => {
    expect(findMedianSortedArrays([1], [2])).toBe(1.5);
    expect(findMedianSortedArrays([5], [1])).toBe(3);
    expect(findMedianSortedArrays([2], [1, 3])).toBe(2);
  });

  // Test Case 6: Arrays where all elements of one are smaller
  test('should handle non-overlapping arrays', () => {
    expect(findMedianSortedArrays([1, 2, 3], [4, 5, 6])).toBe(3.5);
    expect(findMedianSortedArrays([1, 2], [100, 101, 102])).toBe(100);
  });

  // Test Case 7: Negative numbers
  test('should handle negative numbers', () => {
    expect(findMedianSortedArrays([-5, -1], [-3])).toBe(-3);
    expect(findMedianSortedArrays([-4, -2], [-3, -1])).toBe(-2.5);
    expect(findMedianSortedArrays([-10, 0], [5, 10])).toBe(2.5);
  });

  // Test Case 8: Floating point numbers
  test('should handle floating point numbers', () => {
    expect(findMedianSortedArrays([1.5, 2.5], [1.0])).toBe(1.5);
    expect(findMedianSortedArrays([0.1, 0.3], [0.2, 0.4])).toBe(0.25);
  });

  // Test Case 9: Large arrays (edge case for performance)
  test('should handle larger arrays efficiently', () => {
    const nums1 = Array.from({ length: 100 }, (_, i) => i * 2); // [0, 2, 4, 6, ...]
    const nums2 = Array.from({ length: 100 }, (_, i) => i * 2 + 1); // [1, 3, 5, 7, ...]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(99.5);
  });

  // Test Case 10: Complex interleaving
  test('should handle complex interleaving patterns', () => {
    expect(findMedianSortedArrays([1, 4, 7, 10], [2, 3, 5, 6, 8, 9])).toBe(5.5);
    expect(findMedianSortedArrays([2, 4, 6], [1, 3, 5, 7, 8, 9, 10])).toBe(5.5);
  });

  // Test Case 11: Boundary values
  test('should handle extreme values', () => {
    expect(
      findMedianSortedArrays(
        [Number.MIN_SAFE_INTEGER],
        [Number.MAX_SAFE_INTEGER]
      )
    ).toBe(0);
    expect(findMedianSortedArrays([0], [1000000])).toBe(500000);
  });

  // Test Case 12: Return type validation
  test('should return correct data types', () => {
    const result1 = findMedianSortedArrays([1], [2]);
    const result2 = findMedianSortedArrays([1, 2], [3]);

    expect(typeof result1).toBe('number');
    expect(typeof result2).toBe('number');
    expect(Number.isFinite(result1)).toBe(true);
    expect(Number.isFinite(result2)).toBe(true);
  });
});

describe('findMedianSortedArraysOptimized', () => {
  // Test Case 1: Basic examples from problem description
  test('should find median when total length is odd', () => {
    expect(findMedianSortedArraysOptimized([1, 3], [2])).toBe(2);
  });

  test('should find median when total length is even', () => {
    expect(findMedianSortedArraysOptimized([1, 2], [3, 4])).toBe(2.5);
  });

  // Test Case 2: Edge cases with empty arrays
  test('should handle when first array is empty', () => {
    expect(findMedianSortedArraysOptimized([], [1])).toBe(1);
    expect(findMedianSortedArraysOptimized([], [1, 2])).toBe(1.5);
    expect(findMedianSortedArraysOptimized([], [1, 2, 3])).toBe(2);
  });

  test('should handle when second array is empty', () => {
    expect(findMedianSortedArraysOptimized([1], [])).toBe(1);
    expect(findMedianSortedArraysOptimized([1, 2], [])).toBe(1.5);
    expect(findMedianSortedArraysOptimized([1, 2, 3], [])).toBe(2);
  });

  // Test Case 3: Arrays of different sizes
  test('should handle arrays of very different sizes', () => {
    expect(
      findMedianSortedArraysOptimized([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25])
    ).toBe(11);
    expect(findMedianSortedArraysOptimized([1], [2, 3, 4, 5, 6])).toBe(3.5);
    expect(findMedianSortedArraysOptimized([1, 2, 3, 4, 5], [6])).toBe(3.5);
  });

  // Test Case 4: Arrays with same elements
  test('should handle arrays with duplicate elements', () => {
    expect(findMedianSortedArraysOptimized([1, 1, 1], [1, 1, 1])).toBe(1);
    expect(findMedianSortedArraysOptimized([1, 2, 2], [2, 3, 4])).toBe(2);
  });

  // Test Case 5: Single element arrays
  test('should handle single element arrays', () => {
    expect(findMedianSortedArraysOptimized([1], [2])).toBe(1.5);
    expect(findMedianSortedArraysOptimized([5], [1])).toBe(3);
    expect(findMedianSortedArraysOptimized([2], [1, 3])).toBe(2);
  });

  // Test Case 6: Arrays where all elements of one are smaller
  test('should handle non-overlapping arrays', () => {
    expect(findMedianSortedArraysOptimized([1, 2, 3], [4, 5, 6])).toBe(3.5);
    expect(findMedianSortedArraysOptimized([1, 2], [100, 101, 102])).toBe(100);
  });

  // Test Case 7: Negative numbers
  test('should handle negative numbers', () => {
    expect(findMedianSortedArraysOptimized([-5, -1], [-3])).toBe(-3);
    expect(findMedianSortedArraysOptimized([-4, -2], [-3, -1])).toBe(-2.5);
    expect(findMedianSortedArraysOptimized([-10, 0], [5, 10])).toBe(2.5);
  });

  // Test Case 8: Floating point numbers
  test('should handle floating point numbers', () => {
    expect(findMedianSortedArraysOptimized([1.5, 2.5], [1.0])).toBe(1.5);
    expect(findMedianSortedArraysOptimized([0.1, 0.3], [0.2, 0.4])).toBe(0.25);
  });

  // Test Case 9: Large arrays (edge case for performance)
  test('should handle larger arrays efficiently', () => {
    const nums1 = Array.from({ length: 100 }, (_, i) => i * 2); // [0, 2, 4, 6, ...]
    const nums2 = Array.from({ length: 100 }, (_, i) => i * 2 + 1); // [1, 3, 5, 7, ...]
    expect(findMedianSortedArraysOptimized(nums1, nums2)).toBe(99.5);
  });

  // Test Case 10: Complex interleaving
  test('should handle complex interleaving patterns', () => {
    expect(
      findMedianSortedArraysOptimized([1, 4, 7, 10], [2, 3, 5, 6, 8, 9])
    ).toBe(5.5);
    expect(
      findMedianSortedArraysOptimized([2, 4, 6], [1, 3, 5, 7, 8, 9, 10])
    ).toBe(5.5);
  });

  // Test Case 11: Boundary values
  test('should handle extreme values', () => {
    expect(
      findMedianSortedArraysOptimized(
        [Number.MIN_SAFE_INTEGER],
        [Number.MAX_SAFE_INTEGER]
      )
    ).toBe(0);
    expect(findMedianSortedArraysOptimized([0], [1000000])).toBe(500000);
  });

  // Test Case 12: Return type validation
  test('should return correct data types', () => {
    const result1 = findMedianSortedArraysOptimized([1], [2]);
    const result2 = findMedianSortedArraysOptimized([1, 2], [3]);

    expect(typeof result1).toBe('number');
    expect(typeof result2).toBe('number');
    expect(Number.isFinite(result1)).toBe(true);
    expect(Number.isFinite(result2)).toBe(true);
  });
});
