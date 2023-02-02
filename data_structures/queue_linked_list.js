class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// FIFO - First In First Out
// LinkedList Head = Queue rear/last
// LinkedList Tail = Queue front/first

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  // add to rear
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.lasr = newNode;
    } else {
      this.last.next = newNode;
      this.lasst = newNode;
    }

    return ++this.size;
  }

  // remove from front
  dequeue() {
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

const q = new Queue();
q.enqueue('First');
q.enqueue('Second');
q.enqueue('Third');

console.log(':::', q);
q.dequeue();
q.size();

export default Queue;
