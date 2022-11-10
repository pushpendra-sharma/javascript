const map2 = new Map([
  ['a', 1],
  ['b', 3],
]);
console.log(map2);

map2.set('c', 6);
console.log('map2', map2);

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.has('a'));
// expected output: true

console.log(map1.has('d'));
// expected output: false

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);
console.log(map1.has('a'));

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');
// return value
// true if an element in the Map object existed and has been removed,
// or false if the element does not exist.

console.log(map1.size);
// expected output: 2
