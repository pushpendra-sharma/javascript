import { reverseString } from '../reverse';

describe('reverse problems using recursion', () => {
  it('should return reversed string', () => {
    expect(reverseString('awesome')).toBe('emosewa');
    expect(reverseString('rithmschool')).toBe('loohcsmhtir');
  });
});
