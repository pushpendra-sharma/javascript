import { addTwoNumbers, ListNode } from '../add-two-numbers';

// Helper function to create linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head) {
  let result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe('addTwoNumbers', () => {
  test('should add two numbers with same length - Example 1', () => {
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    // Explanation: 342 + 465 = 807
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);
    console.log('::: resultArray', resultArray);
    expect(resultArray).toEqual([7, 0, 8]);
  });

  test('should add two single digit numbers - Example 2', () => {
    // Input: l1 = [0], l2 = [0]
    // Output: [0]
    const l1 = createLinkedList([0]);
    const l2 = createLinkedList([0]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([0]);
  });

  test('should add numbers with different lengths and carry - Example 3', () => {
    // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    // Output: [8,9,9,9,0,0,0,1]
    const l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createLinkedList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  test('should handle single digits with carry', () => {
    // 5 + 5 = 10 -> [0, 1]
    const l1 = createLinkedList([5]);
    const l2 = createLinkedList([5]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([0, 1]);
  });

  test('should handle multiple carries', () => {
    // 999 + 1 = 1000 -> [0, 0, 0, 1]
    const l1 = createLinkedList([9, 9, 9]);
    const l2 = createLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([0, 0, 0, 1]);
  });

  test('should handle lists of different lengths', () => {
    // 99 + 9 = 108 -> [8, 0, 1]
    const l1 = createLinkedList([9, 9]);
    const l2 = createLinkedList([9]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([8, 0, 1]);
  });

  test('should handle simple addition without carry', () => {
    // 123 + 456 = 579 -> [9, 7, 5]
    const l1 = createLinkedList([3, 2, 1]);
    const l2 = createLinkedList([6, 5, 4]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([9, 7, 5]);
  });

  test('should handle cascading carries', () => {
    // 99999 + 1 = 100000 -> [0, 0, 0, 0, 0, 1]
    const l1 = createLinkedList([9, 9, 9, 9, 9]);
    const l2 = createLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([0, 0, 0, 0, 0, 1]);
  });
});
