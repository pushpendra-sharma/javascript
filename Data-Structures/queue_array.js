class Queue {
  // FIFO
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // insert at rear
  enqueue(item) {
    return this.items.unshift(item);
  }

  // remove from front
  dequeue() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const q = new Queue();

console.log('initialize q', q);

q.enqueue(8);
