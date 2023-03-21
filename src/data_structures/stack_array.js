// Stack using array
class Stack {
  constructor() {
    this.items = [];
  }

  // insert at top
  push(item) {
    return this.items.push(item);
  }

  // remove from top
  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

const stack1 = new Stack();

console.log('type of stack1', typeof stack1);
stack1.push(8);

stack1.print();
