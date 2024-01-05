const numbers = [10, 20, 30];

const copyNumbers = [...numbers];

copyNumbers[0] = 100;
/* only copyNumbers modified because numbers are stored by value */

const people = [
  { name: 'John', age: 12 },
  { name: 'bot', age: 23 },
];

const copyPeople = [...people];

copyPeople[0].name = 'jack';

/* both modified because objects are stored by reference */
