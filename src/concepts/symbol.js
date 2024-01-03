// id is a symbol with the description 2
const id = Symbol(2);
console.log(id);
console.log(id.description);

/**
 * Symbols are guaranteed to be unique.
 * Even if we create many symbols with exactly the same description,
 * they are different values.
 * The description is just a label that doesn’t affect anything
 */
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false

const user = {
  name: 'John',
  age: 30,
  [id]: 123, // not "id": 123
};

console.log(user);

// symbols are skipped in for in loop, Object.keys
for (const key in user) {
  console.log(key);
}

// Object.assign and spread operator copies both string and symbol keys
console.log({ ...user });
const clone = Object.assign({}, user);
console.log(clone);
