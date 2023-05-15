import {
  fibGenerator,
  generateId,
  simpleGenerator,
} from '../generator_function';

test('fibGenerator generates the Fibonacci sequence correctly', () => {
  const generator = fibGenerator();
  const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  for (let i = 0; i < expectedSequence.length; i++) {
    const nextValue = generator.next().value;
    expect(nextValue).toBe(expectedSequence[i]);
  }
});

test('generateId generates unique IDs sequentially', () => {
  const generator = generateId();
  const ids = [];

  // Generate the first 10 IDs
  for (let i = 0; i < 10; i++) {
    const nextId = generator.next().value;
    ids.push(nextId);
  }

  expect(ids).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('simpleGenerator yields values in the expected order', () => {
  const generator = simpleGenerator();
  const consoleLogSpy = jest.spyOn(console, 'log');

  // First yield: 1
  const value1 = generator.next().value;
  expect(consoleLogSpy).toHaveBeenCalledWith('inside generator function');
  expect(value1).toBe(1);

  // Second yield: 2
  const value2 = generator.next().value;
  expect(consoleLogSpy).toHaveBeenCalledWith('after 1');
  expect(consoleLogSpy).toHaveBeenCalledWith('before 2');
  expect(value2).toBe(2);

  // Third yield: 3
  const value3 = generator.next().value;
  expect(consoleLogSpy).toHaveBeenCalledWith('after 2');
  expect(consoleLogSpy).toHaveBeenCalledWith('before 3');
  expect(value3).toBe(3);

  // Fourth yield: undefined
  const lastNextIterator = generator.next();
  expect(consoleLogSpy).toHaveBeenCalledWith('after 3');
  expect(lastNextIterator.value).toBe(undefined);

  // Ensure generator is done
  expect(lastNextIterator.done).toBe(true);
  consoleLogSpy.mockRestore();
});
