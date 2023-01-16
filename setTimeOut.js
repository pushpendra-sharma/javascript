function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
/* output after every 1s
6
6
6
6
6
*/

function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
y();
/* output after every 1s
  1
  2
  3
  4
  5
  */

console.log('start');

setTimeout(function callback() {
  console.log('callback');
}, 0);

console.log('end');

// lines of code that take 10s to execute
let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log('while expires');

// then the cb is actually executed after 10s
