import { debounce } from '../debouncing';

jest.useFakeTimers();
test('execute just once', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 500);

  // Execute for the first time
  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0);
  // Move on the timer
  jest.advanceTimersByTime(250);
  // try to execute a 2nd time
  debouncedFunc();

  // Fast-forward time
  jest.runAllTimers();

  expect(func).toBeCalledTimes(1);
});
