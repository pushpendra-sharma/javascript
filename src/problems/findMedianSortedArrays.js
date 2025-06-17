/*
 * What is a median?
 * The median is the middle value in a sorted list of numbers.
 * It divides the data into two equal halves.
 *
 * Example 1: ODD number of elements
 * Array: [1, 3, 5, 7, 9]
 * Total elements: 5
 * Middle position: 5/2 = 2.5 → round down to 2 (0-indexed) → element at index 2
 * Median: 5
 * Left half: [1, 3] | Middle: 5 | Right half: [7, 9]
 *
 * Example 2: EVEN number of elements
 * Array: [2, 4, 6, 8]
 * Total elements: 4
 * Middle positions: elements at index 1 and 2 (4 and 6)
 * Median: (4 + 6) / 2 = 5
 * Left half: [2, 4] | Right half: [6, 8]
 */

/*
 * The naive approach:
 * 1. Merge both arrays → O(m + n) space
 * 2. Sort the merged array → already sorted, so O(m + n) time
 * 3. Find middle element(s) → O(1) time
 * Total: O(m + n) time and space
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = mergeArrays(nums1, nums2);

  let median;

  if (mergedArray.length % 2 === 0) {
    const index1 = mergedArray.length / 2 - 1;
    const index2 = index1 + 1;
    median = (mergedArray[index1] + mergedArray[index2]) / 2;
  } else {
    const index1 = Math.floor(mergedArray.length / 2);
    median = mergedArray[index1];
  }

  return median;
}

/**
 * The optimal approach goal:
 * - Find median without actually merging arrays
 * - Time complexity: O(log(min(m, n)))
 * - Space complexity: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export function findMedianSortedArraysOptimized(nums1, nums2) {}

// helper function to merge 2 arrays
function mergeArrays(arr1, arr2) {
  const array = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    array.push(arr2[j]);
    j++;
  }

  return array;
}
