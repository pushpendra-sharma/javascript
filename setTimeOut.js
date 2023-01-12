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
