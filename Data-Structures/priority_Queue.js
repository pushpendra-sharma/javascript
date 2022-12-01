class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) {
        break;
      }
      // swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let righttChildIdx = 2 * idx + 2;

      let leftChild, righttChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (righttChildIdx < length) {
        righttChild = this.values[righttChildIdx];
        if (
          (swap === null && righttChild.priority > element.priority) ||
          (swap !== null && righttChild.priority > leftChild.priority)
        ) {
          swap = righttChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[idx] = this.values[swap];
      this.values[swap] = this.values[0];
      idx = swap;
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    this.bubbleUp();
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

// with implementation of MaxBinaryHeap
// higher number = higher priority
// priority of 5 is greater than 1

let pq = new PriorityQueue();

pq.enqueue('common cold', 1);
pq.enqueue('gunshot wound', 5);
pq.enqueue('high fever', 2);

export default PriorityQueue;
