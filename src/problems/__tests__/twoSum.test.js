import { twoSum } from '../twoSum';

describe('twoSum', () => {
  it('should return the correct indices for a valid target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should return an empty array for an invalid target', () => {
    expect(twoSum([1, 2, 3], 6)).toEqual([]);
    expect(twoSum([], 0)).toEqual([]);
  });

});
