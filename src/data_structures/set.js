const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add('some text'); // Set [ 1, 5, 'some text' ]

const o = { a: 1, b: 2 };
mySet1.add(o);

console.log(mySet1);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has('Some Text'.toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set [1, 'some text', {...}, {...}, 5] - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1);
// logs Set(5) { 1, "some text", {…}, {…}, 5 } in Chrome

// Use to remove duplicate elements from the array

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
const mySet2 = new Set(numbers);
console.log([...mySet2]);

// [2, 3, 4, 5, 6, 7, 32]
