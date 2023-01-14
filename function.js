// function declaration === function statement

x(); //no error

function x() {
  console.log('Function declaration example');
}

// Difference between fn statement & fn expression is hoisting

// function expression

// b() // throws error
var b = function () {
  // anonymous fn are used in function expression, used as values
  console.log('Function expression');
};

// parameter & argument
function check(param1, param2) {
  console.log(param1, param2);
}

// passed are arguments
check('Argument1', 5);

// first class function = fn can be passed as values or returned as values

// anonymous function doesn't have their identity

/*
function (){
  console.log('throws syntax error')
}
*/

// named function expression
let b = function xyz() {
  console.log('xyz');
};

b();
xyz(); // ReferenceError: xyz is not defined
