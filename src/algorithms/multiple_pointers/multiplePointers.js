/* ====================== Multiple Pointers ========================== */

// Time Complexity - O(n)  Space Complexity - O(n)
export function countUniqueValues(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    nums[j] === nums[i] ? j++ : (nums[++i] = nums[j]);
  }
  return i + 1;
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
