/**
 * @param {Function} func
 * @param {number} delay miliseconds
 * @returns {Function}
 */
export function debounce(func, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, arguments), delay);
  };
}

function handleScroll() {
  console.log('Scroll event debounced');
}

const debouncedScroll = debounce(handleScroll, 200);
