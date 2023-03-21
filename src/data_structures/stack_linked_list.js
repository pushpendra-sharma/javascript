class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// Time Complexity = O(1)
// LIFO - Last In First Out
// LinkedList Head = Stack bottom/last
// LinkedList Tail = Stack top/first
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add new element to top
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // remove top element
  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return temp.value;
  }
}

const stack = new Stack();

stack.push('First');
stack.push('Second');
stack.push('Third');

console.log(':::', stack);
stack.pop();
stack.size();

export default Stack;
