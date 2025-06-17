export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function addTwoNumbers(l1, l2) {
  let firstNode = new ListNode();
  let result = firstNode;

  let carry = 0;

  while (l1 || l2 || carry) {
    // initial sum of 2 digits is carry
    let digitSum = carry;
    let digit;

    if (l1) {
      digitSum = digitSum + l1.val;
      l1 = l1.next;
    }

    if (l2) {
      digitSum = digitSum + l2.val;
      l2 = l2.next;
    }

    // calculate carry and sum of 2 digits
    if (digitSum < 10) {
      carry = 0;
      digit = digitSum;
    } else {
      carry = 1;
      digit = digitSum % 10;
    }

    // create new node for digit
    let newNode = new ListNode(digit);
    result.next = newNode;
    result = result.next;
  }

  return firstNode.next;
}
