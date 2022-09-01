// =============================== Multiple Pointers ================================

// Time Complexity - O(n)  Space Complexity - O(n)
function countUniqueValues(nums) {
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

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// ===============================================================

// Constraints: Time Complexity - O(n log n)  Space Complexity - O(1)
function areThereDuplicates(...rest) {
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
console.log(areThereDuplicates(1, 2, 3, 1, 5)); // true
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// ==========================================================================

// Constraints: Time Complexity - O(n)  Space Complexity - O(1)
function averagePair(nums, avg) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const currAvg = (nums[start] + nums[end]) / 2;
    if (currAvg === avg) return true;
    currAvg > avg ? end-- : start++;
  }

  return false;
}
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true

// ===========================================================================

// Constraints: Time Complexity - O(n + m)  Space Complexity - O(1)
function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;
  let count = 0;
  for (let c of str2) {
    if (str1[count] === c) {
      count++;
    }
  }
  return str1.length === count;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
