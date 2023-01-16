setTimeout(function () {
  console.log('timer');
}, 3000);

function x(callback) {
  console.log('x');
  callback();
}

x(function y() {
  console.log('y');
});
