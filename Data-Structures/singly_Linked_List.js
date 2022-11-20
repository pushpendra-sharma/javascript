class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // to add node at end of list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // to remove node from end of list
  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // to remove node from beginning of list
  shift() {
    if (!this.head) {
      return undefined;
    }

    let prevHead = this.head;
    this.head = prevHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return prevHead;
  }

  // to add node at beginning of list
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // retrieve a node by it's index position
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // change value of a node by it's index position
  set(index, value) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
  }

  // add new node in list at index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }

    let prevNode = this.get(index - 1);
    let newNode = new Node(value);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  // remove node in list at index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;

    prevNode.next = removed.next;
    this.length--;

    return removed;
  }

  // reverse the list (do not make new list)
  reverse() {
    // swap head & tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  // print the list items
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('12');
list.push('bot');

list.reverse()
list.print()

export default SinglyLinkedList;
