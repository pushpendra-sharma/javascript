export function* simpleGenerator() {
  console.log('inside generator function');

  yield 1;
  console.log('after 1');
  console.log('before 2');

  yield 2;
  console.log('after 2');
  console.log('before 3');
  yield 3;
  console.log('after 3');
}

const generatorObject = simpleGenerator();
const firstNext = generatorObject.next(); // { value: 1, done: false };
const secondNext = generatorObject.next(); // { value: 2, done: false };
const thirdNext = generatorObject.next(); // { value: 3, done: false };
const fourthNext = generatorObject.next(); // { value: undefined, done: true };

export function* generateId() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

/**
 * @return {Generator<number>}
 */
export function* fibGenerator() {
  let num1 = 0;
  let num2 = 1;
  while (true) {
    yield num1;
    [num1, num2] = [num2, num2 + num1];
  }
}
