// function declaration === function statement

x(); //no error

function x() {
  console.log('Function declaration example');
}

// Difference between fn statement & fn expression is hoisting

// function expression

// b() // throws error
var b = function () {
  console.log('Function expression');
};

// parameter & argument
function check(param1, param2) {
  console.log(param1, param2);
}

// passed are arguments
check('Argument1', 5);

// first class function = fn can be passed as values or returned as values
