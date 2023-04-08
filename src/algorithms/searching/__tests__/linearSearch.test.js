import { linearSearch } from '../linearSearch';

describe('linearSearch', () => {
  it('should return index if element is present else -1', () => {
    expect(linearSearch([1, 2, 3, 4], 2)).toBe(1);
    expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });
});
