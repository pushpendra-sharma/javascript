// closure = a function bind together with it's lexical environment
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// returns the function with it's lexical env
function outer() {
  function inner() {
    console.log(z);
  }
  var z = 5;

  return inner;
}

var close = outer();
close(); // 5
