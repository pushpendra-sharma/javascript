// check in chrome
function normalize() {
  // 1st this points to object
  // 2nd this points to coords array of object
  console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 }); // → [0, 0.4, 0.6]

function callback(x) {
  // here this points to window
  return x / this.length;
}

function test() {
  console.log(this.arr.map(callback));
}

test.call({ arr: [0, 2, 3], length: 5 }); // → [0, 0.4, 0.6]

const obj = {
  fn: function () {
    console.log(this); // refers to obj
  },
  fn2: () => {
    console.log(this); // refers to window (parent of obj)
  },
};

function x() {
  console.log(this);
}

x();

const person = {
  name: 'Bot',
  print: function () {
    console.log(this);
  },
};

const person2 = {
  name: 'X',
};

// this inside print function
person.print(); // this refers to person
person.print.call(); // this refers to window
person.print.call(person2); // this refers to person2

const person3 = {
  name: 'Arrow',
  print: () => {
    console.log(this.name);
  },
  print2: function () {
    console.log(this.name);
  },
};

// this prints undefined because this refers to window
person3.print();
person3.print().call();

// this prints 'Arrow' because this refers to person3
person3.print2();
person3.print2().call();
