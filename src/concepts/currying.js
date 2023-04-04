/**
 * Two ways for currying
 *  - bind method
 *  - closures
 *
 */

/** using bind method */

function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(6); // returns 12

/** using closure */

function add(a) {
  return function (b) {
    return a + b;
  };
}

const addTwoToNumber = add(2);
addTwoToNumber(8); // returns 10

/** Example */
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);

    return a;
  };
}

sum(1)(8)(); // returns 9

/** Using arrow function */
const sumNew = a => b => b ? sum(a + b) : a;

sumNew(5)(2)(); // returns 7
