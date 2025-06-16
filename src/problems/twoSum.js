export function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    // get target - current number
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    // set value in the map with its index
    numMap.set(nums[i], i);
  }

  return [];
}
