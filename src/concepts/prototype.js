let arr1 = ['Hello', 'Bot', 'Xyz'];

let object1 = {
  name: 'Bot',
  city: 'Noida',
  getIntro: function () {
    console.log(this.name + this.city);
  },
};

// arr1.__proto__  ==  Array.prototype
// arr1.__proto__.__proto__  ==  Object.prototype

// Function.prototype
// Array.prototype
// Object.prototype

let obj2 = {
  name: 'Cbdj',
};

// Never do this
// this will set ptrotype of obj2 to object1
obj2.__proto__ = object1;

// behavior delegation
const foo = { a: 42 };
const bar = Object.create(foo);

bar.b = 'hello world';

console.log(bar.a);
