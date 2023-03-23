/**
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export function isArmstrong(num) {
  let temp = num;
  let temp2 = num;
  let sumOfPower = 0;
  let noOfDigits = 0;

  while (temp > 0) {
    temp = Math.floor(temp / 10);
    noOfDigits++;
  }

  while (temp2 > 0) {
    let digit = temp2 % 10;
    temp2 = Math.floor(temp2 / 10);
    sumOfPower += digit ** noOfDigits;
  }

  return sumOfPower === num;
}
