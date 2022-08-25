class Stack {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  // insert at top
  push(item) {
    this.items.push(item);
  }

  // remove from top
  pop() {
    this.items.pop();
  }

  top() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    let s = '  Top  ';

    for (let i = this.items.length - 1; i >= 0; i--) {
      if (i === 0) {
        s = s + `\n|__${this.items[i]}___|`;
      } else {
        s = s + `\n|  ${this.items[i]}   |`;
      }
    }

    console.log(s);
  }
}

const stack1 = new Stack();

console.log('type of stack1', typeof stack1);
stack1.push(8);
stack1.push(5);
stack1.push(7);
console.log('after 3 push operaton, top element', stack1.top());
console.log('size', stack1.size());

stack1.pop();
console.log('after 1 pop operaton', stack1);
console.log('size', stack1.size());

console.log('is empty', stack1.isEmpty());

stack1.push(9);
stack1.push(6);

stack1.print();
