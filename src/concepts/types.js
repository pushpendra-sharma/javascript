// typeof always returns string in small case
const bigint = 1234567890123456789012345678901234567890n;

function exampleFunction() {
  console.log('example function');
}

// id is a symbol with the description "id"
let id = Symbol('id');

console.log(typeof 42); // "number"

console.log(typeof 'pushpendra'); // "string"

console.log(typeof true); // "boolean"

console.log(typeof undeclaredVariable); // "undefined"

console.log(typeof []); // "object"
console.log(typeof { a: 1 }); // "object"
console.log(typeof null); // "object"

console.log(typeof bigint); // "bigint"

console.log(typeof id); // "symbol"

console.log(typeof exampleFunction); // "function"
