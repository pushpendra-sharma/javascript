class Queue {
  // FIFO
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  getItems() {
    return this.items;
  }

  // insert at rear
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  // remove from front
  dequeue() {
    delete this.items[this.front];
    this.front++;
  }

  frontElement() {
    return this.items[this.front];
  }

  rearElement() {
    return this.items[this.rear - 1];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }
}

const q = new Queue();

console.log('initialize q', q);

q.enqueue(8);
q.enqueue(7);
q.enqueue(5);

console.log('after 3 enqueue operaton', q.size(), q);
q.dequeue();
console.log('after 1 dequeue operaton', q.size(), q);

console.log('rear', q.rearElement());
console.log('front', q.frontElement());
