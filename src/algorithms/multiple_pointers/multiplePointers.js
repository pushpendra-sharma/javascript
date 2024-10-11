/* ====================== Multiple Pointers ========================== */

/**
 * Write a function that accepts a sorted array of integers and counts the uniques values in the array.
 * Can also do by frequency pattern.
 */
// Time Complexity - O(n)  Space Complexity - O(n)
export function countUniqueValues(nums) {
  if (nums.length < 2) return nums.length;

  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer2 < nums.length) {
    if (nums[pointer2] === nums[pointer1]) {
      pointer2 = pointer2 + 1;
    } else {
      pointer1 = pointer1 + 1;
      nums[pointer1] = nums[pointer2];
    }
  }
  return pointer1 + 1;
}

// Constraints: Time Complexity - O(n log n)  Space Complexity - O(1)
export function areThereDuplicates(...rest) {
  rest.sort();

  let i = 0;
  let j = 1;
  while (j < rest.length) {
    if (rest[j] === rest[i]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

// Constraints: Time Complexity - O(n)  Space Complexity - O(1)
export function averagePair(nums, avg) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const currAvg = (nums[start] + nums[end]) / 2;
    if (currAvg === avg) return true;
    currAvg > avg ? end-- : start++;
  }

  return false;
}

// Constraints: Time Complexity - O(n + m)  Space Complexity - O(1)
export function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;
  let count = 0;
  for (let c of str2) {
    if (str1[count] === c) {
      count++;
    }
  }
  return str1.length === count;
}
