import { naiveStringSearch } from '../stringSearch';

describe('binarySearch', () => {
  it('should return index if element is present else -1', () => {
    expect(naiveStringSearch('lorie loled', 'lol')).toBe(1);
  });
});
