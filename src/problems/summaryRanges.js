/**
 * @param {number[]} nums
 * @return {string[]}
 */
export function summaryRanges(nums) {
  const ranges = [];
  let i = 0;

  while (i < nums.length) {
    let start = i;
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    if (start === i) ranges.push(`${nums[start]}`);
    else ranges.push(`${nums[start]}->${nums[i]}`);

    i++;
  }

  return ranges;
}
