let a = 'bfe.dev';
a[0] = 'c'; // this will make no difference, strings are immmutable
console.log(a); // "bfe.dev"

let someString = 'bfe';
someString = 'dev';
console.log(someString);  // 'dev', because memory location changes, for variable pointing

