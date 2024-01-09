const people = [
  { id: 1, name: 'Pushpendra' },
  { id: 2, name: 'Bot' },
  { id: 3, name: 'Elon musk' },
];

// O(n^3)
const withSpread = people.reduce(
  (lookup, person) => ({ ...lookup, [person.id]: person }),
  {}
);
const withoutSpread = people.reduce((lookup, person) => {
  lookup[person.id] = person;
  return lookup;
}, {});

console.log(withSpread);
console.log(withoutSpread);

const numbers = [10, 20, 30, 40, 50];
const arrayWithSpread = numbers.reduce((arr, v) => [...arr, v * 100], []);
const arrayWithoutSpread = numbers.reduce((arr, v) => {
  arr.push(v * 100);
  return arr;
}, []);

console.log(arrayWithSpread);
console.log(arrayWithoutSpread);
