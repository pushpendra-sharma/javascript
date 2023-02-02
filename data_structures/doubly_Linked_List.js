class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // to add node at end of list
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
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
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  // to remove node from beginning of list
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;

    if (this.length === 1) {
      this.head == null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  // to add node at beginning of list
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // retrieve a node by it's index position
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = index <= this.length / 2 ? 0 : this.length - 1;
    let current = index <= this.length / 2 ? this.head : this.tail;

    if (index <= this.length / 2) {
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  // change value of a node by it's position
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // add new node in list at index
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  // remove node in list at index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;

    return removedNode;
  }

  // print the list items
  print() {}
}

const list = new DoublyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('kam');
list.push('nav');

export default DoublyLinkedList