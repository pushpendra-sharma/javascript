import { isArmstrong } from '../armstrong';

describe('Armstrong number', () => {
  it('should check if given number is Armstrong number', () => {
    expect(isArmstrong(0)).toBeTruthy();
    expect(isArmstrong(1)).toBeTruthy();
    expect(isArmstrong(153)).toBeTruthy();
    expect(isArmstrong(370)).toBeTruthy();
    expect(isArmstrong(371)).toBeTruthy();
    expect(isArmstrong(407)).toBeTruthy();
    expect(isArmstrong(1634)).toBeTruthy();

    expect(isArmstrong(170)).toBeFalsy();
  });
});
