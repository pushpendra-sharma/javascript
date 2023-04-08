import { binarySearch } from '../binarySearch';

describe('binarySearch', () => {
  it('should return index if element is present else -1', () => {
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });
});
