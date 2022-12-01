class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (righttChildIdx < length) {
        righttChild = this.values[righttChildIdx];
        if (
          (swap === null && righttChild > element) ||
          (swap !== null && righttChild > leftChild)
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

  // Time Complexity - O(logn)
  insert(element) {
    this.values.push(element);

    this.bubbleUp();
  }

  // Time Complexity - O(logn)
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);

export default MaxBinaryHeap;
