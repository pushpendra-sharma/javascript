// rest parameter always in last
// it combines all params to single array
function x(z, ...rest) {
  let y = rest;
  // console.log(y);
  return y;
}

const a = x(90);
const b = x(4, 6, 2, 9, 0);
const c = x([4, 20, 36]);
const d = x([1, 2, 3], { name: 'Dlfowe', age: 78 });
const e = x({ name: 'Smffemg', age: 16, isValid: false });
const f = x(
  { name: 'Smffemg', age: 16, isValid: false },
  { name: 'Bot', age: 45, isValid: true },
  { name: 'Xyz', age: 34, isValid: false }
);

console.log(a); // rest = []
console.log(b); // rest = [6,2,9,0]
console.log(c); // rest = []
console.log(d); // rest = [{ name: 'Dlfowe', age: 78 }]
console.log(e); // rest = []
console.log(f); // rest = [  { name: 'Bot', age: 45, isValid: true },  { name: 'Xyz', age: 34, isValid: false }]
