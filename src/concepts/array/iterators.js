const numbers = [1, 3, 5, 7, 6, 8, 9];

/* for in loops */
for (const index in numbers) {
  console.log(index);
}

/* for of loop */
for (const n of numbers) {
  console.log(n);
}

// can't break a forEach loop, incompatible for async
numbers.forEach((number, idx) => {
  console.log(idx);
  console.log(number);
});
